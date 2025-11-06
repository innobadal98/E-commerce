import React from "react";
import { Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, GitHub, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div>
          <Typography variant="h5" className="text-white font-bold mb-3">
            🛍️ MyStore
          </Typography>
          <Typography variant="body2">
            Your one-stop shop for trendy fashion, gadgets, and lifestyle products.
          </Typography>
        </div>

        {/* Links Section */}
        <div className="flex flex-col">
          <Typography variant="h6" className="text-white font-semibold mb-3">
            Quick Links
          </Typography>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/faq" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <Typography variant="h6" className="text-white font-semibold mb-3">
            Follow Us
          </Typography>
          <div className="flex space-x-3">
            <IconButton color="inherit" href="https://facebook.com" target="_blank">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com" target="_blank">
              <Instagram />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com" target="_blank">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" href="https://github.com" target="_blank">
              <GitHub />
            </IconButton>
            <IconButton color="inherit" href="https://linkedin.com" target="_blank">
              <LinkedIn />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-4">
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} MyStore — All Rights Reserved.
        </Typography>
      </div>
    </footer>
  );
}
