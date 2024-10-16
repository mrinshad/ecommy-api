const db = require('../database/database');

// Insert product function
exports.insertProduct = (req, res) => {
    const sql = `INSERT INTO products (product_name, description, category, price, discount, stock_quantity, sku, brand, dimensions, weight, shipping_weight, return_policy, seller_info) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const { product_name, description, category, price, discount, stock_quantity, sku, brand, dimensions, weight, shipping_weight, return_policy, seller_info } = req.body;

    db.query(sql, [product_name, description, category, price, discount, stock_quantity, sku, brand, dimensions, weight, shipping_weight, return_policy, seller_info], (err, result) => {
        if (err) {
            console.error("Error inserting product: ", err);
            return res.status(500).json({ error: "Failed to insert product" });
        } else {
            res.status(201).json({ message: "Product inserted successfully", productId: result.insertId });
        }
    });
};

exports.getApprovedProducts = (req,res) =>{
    const sql = 'SELECT * FROM products WHERE status = "approved"'

    db.query(sql,function(err,results,fields){
        if(err){
            res.status(500).json({ error: "Failed to get product" });
        }else{
            res.status(200).json(results)
        }
        // console.log(results)
    });
}

exports.getProducts = (req,res) =>{
    const sql = 'SELECT * FROM products'

    db.query(sql,function(err,results,fields){
        if(err){
            res.status(500).json({ error: "Failed to get product" });
        }else{
            res.status(200).json(results)
        }
        // console.log(results)
    });
}

exports.getapproveProduct = (req, res) => {
    const sql = 'UPDATE products SET status="approved" WHERE id=?';

    // Ensure req.body.id is passed as a parameter to the query
    db.query(sql, [req.body.id], function(err, results, fields) {
        if (err) {
            res.status(500).json({ error: "Failed to approve product", err });
        } else {
            res.status(200).json({ message: "Product approved successfully", results });
        }
    });
};

exports.getRejectProduct = (req, res) => {
    const sql = 'UPDATE products SET status="rejected" WHERE id=?';

    // Ensure req.body.id is passed as a parameter to the query
    db.query(sql, [req.body.id], function(err, results, fields) {
        if (err) {
            res.status(500).json({ error: "Failed to reject product", err });
        } else {
            res.status(200).json({ message: "Product rejected successfully", results });
        }
    });
};

