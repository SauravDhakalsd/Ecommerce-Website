const express = require("express");
const {
  getAllProducts,
  createProduct,
  editProduct,
  removeProduct,
  getProductDetails,
  createReview,
  getProductReviews,
  removeReview,
  getAdminProducts,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), editProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), removeProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, removeReview);

module.exports = router;
