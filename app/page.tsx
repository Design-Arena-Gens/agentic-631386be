"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Smart Cafe Management System",
    subtitle: "B.Tech Mini Project",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <div className="text-8xl mb-4">☕</div>
        <h1 className="text-7xl font-bold text-amber-900 text-center">
          Smart Cafe Management System
        </h1>
        <h2 className="text-4xl text-amber-700 mt-4">B.Tech Mini Project</h2>
        <div className="mt-12 text-2xl text-gray-700 space-y-2 text-center">
          <p className="font-semibold">Presented by: [Student Name]</p>
          <p>Roll No: [Roll Number]</p>
          <p>Department of Computer Science & Engineering</p>
          <p className="mt-4 text-xl">[College Name]</p>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-amber-50 to-orange-100",
  },
  {
    id: 2,
    title: "Motivation & Background",
    content: (
      <div className="space-y-8">
        <div className="text-6xl text-center mb-8">📈</div>
        <h2 className="text-5xl font-bold text-amber-900 mb-8">
          Why This Project?
        </h2>
        <div className="space-y-6 text-2xl">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-amber-800 mb-3">
              🌐 Digital Transformation
            </h3>
            <p className="text-gray-700">
              Small and medium cafés in India are rapidly adopting digital
              solutions to stay competitive
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-amber-800 mb-3">
              💰 Affordable Solutions
            </h3>
            <p className="text-gray-700">
              Need for cost-effective management systems tailored for local
              businesses
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-amber-800 mb-3">
              ⚡ Simple & Efficient
            </h3>
            <p className="text-gray-700">
              User-friendly interface that requires minimal training for café
              staff
            </p>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-blue-50 to-indigo-100",
  },
  {
    id: 3,
    title: "Literature Review / Existing Systems",
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-amber-900 mb-8">
          Existing Solutions Analysis
        </h2>
        <div className="grid grid-cols-2 gap-8 text-xl">
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
            <h3 className="font-bold text-2xl text-red-800 mb-4">
              ❌ Current Systems
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>💸 High subscription costs (₹5000-15000/month)</li>
              <li>🔧 Complex setup and maintenance</li>
              <li>🌍 Not localized for Indian market</li>
              <li>📱 Requires expensive hardware</li>
              <li>⚠️ Poor customer support</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
            <h3 className="font-bold text-2xl text-green-800 mb-4">
              ✅ Our Opportunity
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>💚 Affordable pricing model</li>
              <li>🌐 Lightweight web-based solution</li>
              <li>🇮🇳 Built for Indian businesses</li>
              <li>📱 Works on any device</li>
              <li>🚀 Easy deployment & updates</li>
            </ul>
          </div>
        </div>
        <div className="bg-amber-100 p-6 rounded-lg mt-6">
          <p className="text-xl text-center font-semibold text-amber-900">
            Market Gap: Need for accessible, affordable, and localized café
            management solution
          </p>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-purple-50 to-pink-100",
  },
  {
    id: 4,
    title: "Problem Statement",
    content: (
      <div className="space-y-8">
        <div className="text-6xl text-center mb-6">⚠️</div>
        <h2 className="text-5xl font-bold text-red-800 mb-8 text-center">
          Key Problems in Manual Systems
        </h2>
        <div className="grid grid-cols-2 gap-6 text-xl">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
            <h3 className="font-bold text-2xl text-red-700 mb-3">
              🧾 Billing Errors
            </h3>
            <p className="text-gray-700">
              Manual calculations lead to frequent mistakes, revenue loss, and
              customer dissatisfaction
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
            <h3 className="font-bold text-2xl text-orange-700 mb-3">
              📊 No Sales Tracking
            </h3>
            <p className="text-gray-700">
              Lack of insights into daily sales, peak hours, and popular items
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
            <h3 className="font-bold text-2xl text-yellow-700 mb-3">
              💬 Poor Communication
            </h3>
            <p className="text-gray-700">
              Cashier-kitchen coordination issues causing order delays and
              errors
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-600">
            <h3 className="font-bold text-2xl text-red-700 mb-3">
              📝 Missing Records
            </h3>
            <p className="text-gray-700">
              No customer history or inventory tracking leading to stock issues
            </p>
          </div>
        </div>
        <div className="bg-red-100 p-4 rounded-lg mt-6 text-center">
          <p className="text-2xl font-bold text-red-900">
            Result: Lost revenue, inefficiency, and poor customer experience
          </p>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-red-50 to-orange-100",
  },
  {
    id: 5,
    title: "Objectives",
    content: (
      <div className="space-y-8">
        <div className="text-6xl text-center mb-6">🎯</div>
        <h2 className="text-5xl font-bold text-green-800 mb-8 text-center">
          Project Objectives
        </h2>
        <div className="space-y-4 text-2xl">
          <div className="bg-gradient-to-r from-green-100 to-green-50 p-6 rounded-lg shadow-md border-l-4 border-green-600">
            <span className="font-bold text-green-800">1. Automate Billing:</span>
            <span className="text-gray-700 ml-3">
              Generate accurate bills instantly with automated calculations
            </span>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg shadow-md border-l-4 border-blue-600">
            <span className="font-bold text-blue-800">2. Track Sales:</span>
            <span className="text-gray-700 ml-3">
              Real-time sales analytics and reporting for business insights
            </span>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-6 rounded-lg shadow-md border-l-4 border-purple-600">
            <span className="font-bold text-purple-800">
              3. Improve Communication:
            </span>
            <span className="text-gray-700 ml-3">
              Seamless order flow from cashier to kitchen
            </span>
          </div>
          <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-6 rounded-lg shadow-md border-l-4 border-orange-600">
            <span className="font-bold text-orange-800">
              4. Manage Inventory:
            </span>
            <span className="text-gray-700 ml-3">
              Track stock levels and get low-stock alerts
            </span>
          </div>
          <div className="bg-gradient-to-r from-pink-100 to-pink-50 p-6 rounded-lg shadow-md border-l-4 border-pink-600">
            <span className="font-bold text-pink-800">
              5. Customer Records:
            </span>
            <span className="text-gray-700 ml-3">
              Maintain customer database for loyalty programs
            </span>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-green-50 to-teal-100",
  },
  {
    id: 6,
    title: "Scope of the Project",
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-indigo-900 mb-8 text-center">
          Project Scope
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-green-700 mb-4">
              ✅ In Scope
            </h3>
            <div className="space-y-3 text-xl">
              <div className="bg-white p-4 rounded-lg shadow">
                • Point of Sale (POS) System
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                • Order Management
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                • Inventory Tracking
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                • Sales Reports & Analytics
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                • Customer Management
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                • User Authentication
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-red-700 mb-4">
              ❌ Out of Scope
            </h3>
            <div className="space-y-3 text-xl">
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                • Payment Gateway Integration
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                • Mobile App Development
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                • Multi-location Management
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                • Advanced HR Features
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                • Accounting Integration
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                • Supply Chain Management
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-indigo-50 to-blue-100",
  },
  {
    id: 7,
    title: "System Architecture",
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-blue-900 mb-8 text-center">
          System Architecture
        </h2>
        <div className="flex flex-col items-center space-y-6 text-xl">
          <div className="bg-blue-100 p-6 rounded-lg w-full border-2 border-blue-400">
            <h3 className="font-bold text-2xl text-center text-blue-800">
              🌐 Frontend Layer
            </h3>
            <p className="text-center text-gray-700 mt-2">
              React.js / Next.js • Responsive UI • Real-time Updates
            </p>
          </div>
          <div className="text-4xl">↕️</div>
          <div className="bg-green-100 p-6 rounded-lg w-full border-2 border-green-400">
            <h3 className="font-bold text-2xl text-center text-green-800">
              ⚙️ Backend Layer
            </h3>
            <p className="text-center text-gray-700 mt-2">
              Node.js / Express • RESTful APIs • Authentication
            </p>
          </div>
          <div className="text-4xl">↕️</div>
          <div className="bg-purple-100 p-6 rounded-lg w-full border-2 border-purple-400">
            <h3 className="font-bold text-2xl text-center text-purple-800">
              🗄️ Database Layer
            </h3>
            <p className="text-center text-gray-700 mt-2">
              MongoDB / PostgreSQL • Data Storage • Queries
            </p>
          </div>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg mt-6">
          <p className="text-xl text-center font-semibold">
            🔄 Three-Tier Architecture: Presentation → Business Logic → Data
          </p>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-cyan-50 to-blue-100",
  },
  {
    id: 8,
    title: "Technology Stack",
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-purple-900 mb-8 text-center">
          Technology Stack
        </h2>
        <div className="grid grid-cols-2 gap-6 text-xl">
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
            <h3 className="font-bold text-2xl text-blue-800 mb-4">
              💻 Frontend
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• React.js / Next.js</li>
              <li>• Tailwind CSS</li>
              <li>• TypeScript</li>
              <li>• Redux / Context API</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-lg border-t-4 border-green-500">
            <h3 className="font-bold text-2xl text-green-800 mb-4">
              ⚙️ Backend
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Node.js</li>
              <li>• Express.js</li>
              <li>• JWT Authentication</li>
              <li>• RESTful APIs</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow-lg border-t-4 border-purple-500">
            <h3 className="font-bold text-2xl text-purple-800 mb-4">
              🗄️ Database
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• MongoDB</li>
              <li>• Mongoose ODM</li>
              <li>• PostgreSQL (Alternative)</li>
              <li>• Redis (Caching)</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-lg border-t-4 border-orange-500">
            <h3 className="font-bold text-2xl text-orange-800 mb-4">
              🚀 Deployment
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Vercel / Netlify</li>
              <li>• Docker</li>
              <li>• GitHub Actions (CI/CD)</li>
              <li>• AWS / Heroku</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-purple-50 to-indigo-100",
  },
  {
    id: 9,
    title: "System Features - Overview",
    content: (
      <div className="space-y-6">
        <h2 className="text-5xl font-bold text-teal-900 mb-6 text-center">
          Core System Features
        </h2>
        <div className="grid grid-cols-3 gap-4 text-lg">
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">🧾</div>
            <h3 className="font-bold text-xl text-teal-800">POS Billing</h3>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">📋</div>
            <h3 className="font-bold text-xl text-teal-800">
              Order Management
            </h3>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">📦</div>
            <h3 className="font-bold text-xl text-teal-800">
              Inventory Control
            </h3>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">👥</div>
            <h3 className="font-bold text-xl text-teal-800">
              Customer DB
            </h3>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-bold text-xl text-teal-800">
              Sales Analytics
            </h3>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">👨‍💼</div>
            <h3 className="font-bold text-xl text-teal-800">
              Staff Management
            </h3>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">🍽️</div>
            <h3 className="font-bold text-xl text-teal-800">Menu Manager</h3>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">🔔</div>
            <h3 className="font-bold text-xl text-teal-800">Notifications</h3>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-3">📈</div>
            <h3 className="font-bold text-xl text-teal-800">Reports</h3>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-teal-50 to-cyan-100",
  },
  {
    id: 10,
    title: "Feature 1: POS & Billing",
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-amber-900 mb-6 text-center">
          Point of Sale System
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-amber-800 mb-4">
              Key Features
            </h3>
            <div className="space-y-3 text-xl">
              <div className="bg-white p-4 rounded-lg shadow">
                ✓ Quick item selection interface
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                ✓ Automatic price calculation
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                ✓ Tax computation (GST/VAT)
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                ✓ Multiple payment methods
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                ✓ Instant receipt generation
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                ✓ Discount application
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-lg shadow-lg">
            <div className="text-6xl text-center mb-4">🧾</div>
            <h3 className="text-2xl font-bold text-center mb-4 text-amber-900">
              Benefits
            </h3>
            <ul className="space-y-3 text-xl text-gray-800">
              <li>⚡ Faster checkout process</li>
              <li>✅ Error-free billing</li>
              <li>💰 Accurate tax calculation</li>
              <li>😊 Better customer experience</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-yellow-50 to-amber-100",
  },
  {
    id: 11,
    title: "Feature 2: Order Management",
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-green-900 mb-6 text-center">
          Order Management System
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-green-800 mb-4">
              Order Flow
            </h3>
            <div className="space-y-4 text-xl">
              <div className="flex items-center space-x-3">
                <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  1
                </span>
                <span>Order placed at counter</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  2
                </span>
                <span>Sent to kitchen display</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  3
                </span>
                <span>Kitchen prepares order</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  4
                </span>
                <span>Order ready notification</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  5
                </span>
                <span>Order delivered/completed</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 p-5 rounded-lg shadow-md">
              <h4 className="font-bold text-xl text-blue-800 mb-2">
                📱 Real-time Updates
              </h4>
              <p className="text-gray-700">
                Instant order status sync across all devices
              </p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg shadow-md">
              <h4 className="font-bold text-xl text-purple-800 mb-2">
                🔔 Notifications
              </h4>
              <p className="text-gray-700">
                Alert staff when orders are ready or delayed
              </p>
            </div>
            <div className="bg-orange-50 p-5 rounded-lg shadow-md">
              <h4 className="font-bold text-xl text-orange-800 mb-2">
                📋 Order History
              </h4>
              <p className="text-gray-700">
                Track all orders with timestamps and details
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-green-50 to-emerald-100",
  },
  {
    id: 12,
    title: "Feature 3: Inventory Management",
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-blue-900 mb-6 text-center">
          Inventory Management
        </h2>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6 text-xl">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-2xl text-blue-800 mb-4">
                📦 Stock Tracking
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Real-time stock levels</li>
                <li>• Automatic deduction on sale</li>
                <li>• Low stock alerts</li>
                <li>• Expiry date tracking</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-2xl text-purple-800 mb-4">
                📊 Analytics
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Usage patterns</li>
                <li>• Waste tracking</li>
                <li>• Popular items</li>
                <li>• Reorder suggestions</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-2xl text-yellow-800 mb-4 text-center">
              ⚠️ Smart Alerts
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded">
                <div className="text-3xl mb-2">🔴</div>
                <p className="font-semibold">Out of Stock</p>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="text-3xl mb-2">🟡</div>
                <p className="font-semibold">Low Stock</p>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="text-3xl mb-2">⏰</div>
                <p className="font-semibold">Expiring Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-blue-50 to-indigo-100",
  },
  {
    id: 13,
    title: "Feature 4: Customer Management",
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-pink-900 mb-6 text-center">
          Customer Management
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-pink-800 mb-4">
              👥 Customer Database
            </h3>
            <div className="space-y-3 text-xl text-gray-700">
              <div className="flex items-center space-x-3">
                <span>✓</span>
                <span>Contact information</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>✓</span>
                <span>Order history</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>✓</span>
                <span>Purchase patterns</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>✓</span>
                <span>Preferences & favorites</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>✓</span>
                <span>Feedback & ratings</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-pink-100 to-pink-50 p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-2xl text-pink-800 mb-3">
                🎁 Loyalty Program
              </h3>
              <p className="text-gray-700 text-lg">
                Reward repeat customers with points, discounts, and special
                offers
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-2xl text-purple-800 mb-3">
                📧 Marketing
              </h3>
              <p className="text-gray-700 text-lg">
                Send targeted promotions and birthday offers to customers
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-2xl text-blue-800 mb-3">
                📈 Insights
              </h3>
              <p className="text-gray-700 text-lg">
                Analyze customer behavior for better business decisions
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-pink-50 to-rose-100",
  },
  {
    id: 14,
    title: "Feature 5: Reports & Analytics",
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-indigo-900 mb-6 text-center">
          Reports & Analytics
        </h2>
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-3">📊</div>
              <h3 className="font-bold text-xl text-indigo-800">
                Daily Sales
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Revenue, orders, avg ticket
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-3">🔥</div>
              <h3 className="font-bold text-xl text-red-800">Best Sellers</h3>
              <p className="text-gray-600 text-sm mt-2">Top items by sales</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-3">⏰</div>
              <h3 className="font-bold text-xl text-green-800">Peak Hours</h3>
              <p className="text-gray-600 text-sm mt-2">
                Busiest time periods
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-3">💰</div>
              <h3 className="font-bold text-xl text-yellow-800">Revenue</h3>
              <p className="text-gray-600 text-sm mt-2">
                Daily/weekly/monthly
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-3">📦</div>
              <h3 className="font-bold text-xl text-purple-800">
                Inventory
              </h3>
              <p className="text-gray-600 text-sm mt-2">Stock levels report</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-3">👥</div>
              <h3 className="font-bold text-xl text-blue-800">Staff</h3>
              <p className="text-gray-600 text-sm mt-2">
                Performance metrics
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-2xl text-indigo-900 mb-4 text-center">
              📈 Visual Dashboards
            </h3>
            <p className="text-xl text-center text-gray-700">
              Interactive charts, graphs, and real-time data visualization for
              quick insights
            </p>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-indigo-50 to-purple-100",
  },
  {
    id: 15,
    title: "Database Design",
    content: (
      <div className="space-y-6">
        <h2 className="text-5xl font-bold text-teal-900 mb-6 text-center">
          Database Schema
        </h2>
        <div className="grid grid-cols-2 gap-4 text-lg">
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h3 className="font-bold text-xl text-blue-800 mb-2">
              🗃️ Users
            </h3>
            <p className="text-sm text-gray-600">
              ID, name, email, role, password
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow">
            <h3 className="font-bold text-xl text-green-800 mb-2">
              🍽️ Menu Items
            </h3>
            <p className="text-sm text-gray-600">
              ID, name, price, category, image
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg shadow">
            <h3 className="font-bold text-xl text-purple-800 mb-2">
              📋 Orders
            </h3>
            <p className="text-sm text-gray-600">
              ID, customer, items, total, status
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg shadow">
            <h3 className="font-bold text-xl text-orange-800 mb-2">
              💰 Payments
            </h3>
            <p className="text-sm text-gray-600">
              ID, order, amount, method, date
            </p>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg shadow">
            <h3 className="font-bold text-xl text-pink-800 mb-2">
              📦 Inventory
            </h3>
            <p className="text-sm text-gray-600">
              ID, item, quantity, unit, expiry
            </p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg shadow">
            <h3 className="font-bold text-xl text-indigo-800 mb-2">
              👥 Customers
            </h3>
            <p className="text-sm text-gray-600">
              ID, name, phone, email, points
            </p>
          </div>
        </div>
        <div className="bg-teal-100 p-6 rounded-lg mt-4">
          <h3 className="font-bold text-2xl text-teal-900 mb-3 text-center">
            🔗 Relationships
          </h3>
          <div className="text-lg text-gray-800 space-y-2">
            <p>• Orders ↔ Customers (One-to-Many)</p>
            <p>• Orders ↔ Menu Items (Many-to-Many)</p>
            <p>• Orders ↔ Payments (One-to-One)</p>
            <p>• Users ↔ Orders (One-to-Many)</p>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-teal-50 to-cyan-100",
  },
  {
    id: 16,
    title: "User Interface Design",
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-orange-900 mb-6 text-center">
          User Interface Design
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-orange-800 mb-4">
              Design Principles
            </h3>
            <div className="space-y-3 text-xl">
              <div className="bg-white p-4 rounded-lg shadow">
                🎨 <span className="font-semibold">Clean & Modern:</span>{" "}
                Minimalist design
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                📱 <span className="font-semibold">Responsive:</span> Works on
                all devices
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                ⚡ <span className="font-semibold">Fast:</span> Quick load
                times
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                👁️ <span className="font-semibold">Intuitive:</span> Easy to
                navigate
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                🌈 <span className="font-semibold">Branded:</span> Consistent
                colors
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-orange-800 mb-4">
              Key Screens
            </h3>
            <div className="space-y-3 text-xl">
              <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg shadow">
                🔐 Login & Dashboard
              </div>
              <div className="bg-gradient-to-r from-green-100 to-green-50 p-4 rounded-lg shadow">
                🧾 POS Interface
              </div>
              <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-4 rounded-lg shadow">
                📋 Order Management
              </div>
              <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 p-4 rounded-lg shadow">
                📦 Inventory Screen
              </div>
              <div className="bg-gradient-to-r from-pink-100 to-pink-50 p-4 rounded-lg shadow">
                📊 Reports Dashboard
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-orange-50 to-red-100",
  },
  {
    id: 17,
    title: "Security Features",
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-red-900 mb-6 text-center">
          Security & Authentication
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-red-50 p-6 rounded-lg shadow-lg border-l-4 border-red-500">
              <h3 className="font-bold text-2xl text-red-800 mb-3">
                🔐 Authentication
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>• JWT token-based auth</li>
                <li>• Secure password hashing</li>
                <li>• Session management</li>
                <li>• Two-factor authentication</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
              <h3 className="font-bold text-2xl text-orange-800 mb-3">
                👮 Authorization
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>• Role-based access control</li>
                <li>• Permission management</li>
                <li>• Admin, Manager, Cashier roles</li>
                <li>• API endpoint protection</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-2xl text-blue-800 mb-3">
                🛡️ Data Security
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>• HTTPS encryption</li>
                <li>• Database encryption</li>
                <li>• Input validation</li>
                <li>• SQL injection prevention</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <h3 className="font-bold text-2xl text-green-800 mb-3">
                📋 Compliance
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>• Data privacy protection</li>
                <li>• Audit logging</li>
                <li>• Regular backups</li>
                <li>• GDPR considerations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-red-50 to-pink-100",
  },
  {
    id: 18,
    title: "Implementation Plan",
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-blue-900 mb-6 text-center">
          Implementation Timeline
        </h2>
        <div className="space-y-4 text-xl">
          <div className="bg-blue-100 p-5 rounded-lg shadow-lg border-l-4 border-blue-600">
            <h3 className="font-bold text-2xl text-blue-900 mb-2">
              Phase 1: Planning (Week 1-2)
            </h3>
            <p className="text-gray-700">
              Requirements gathering, system design, database schema, UI mockups
            </p>
          </div>
          <div className="bg-green-100 p-5 rounded-lg shadow-lg border-l-4 border-green-600">
            <h3 className="font-bold text-2xl text-green-900 mb-2">
              Phase 2: Backend Development (Week 3-5)
            </h3>
            <p className="text-gray-700">
              API development, database setup, authentication, core business
              logic
            </p>
          </div>
          <div className="bg-purple-100 p-5 rounded-lg shadow-lg border-l-4 border-purple-600">
            <h3 className="font-bold text-2xl text-purple-900 mb-2">
              Phase 3: Frontend Development (Week 6-8)
            </h3>
            <p className="text-gray-700">
              UI components, POS interface, dashboards, responsive design
            </p>
          </div>
          <div className="bg-orange-100 p-5 rounded-lg shadow-lg border-l-4 border-orange-600">
            <h3 className="font-bold text-2xl text-orange-900 mb-2">
              Phase 4: Integration & Testing (Week 9-10)
            </h3>
            <p className="text-gray-700">
              System integration, unit testing, user acceptance testing, bug
              fixes
            </p>
          </div>
          <div className="bg-red-100 p-5 rounded-lg shadow-lg border-l-4 border-red-600">
            <h3 className="font-bold text-2xl text-red-900 mb-2">
              Phase 5: Deployment (Week 11-12)
            </h3>
            <p className="text-gray-700">
              Production setup, documentation, training, launch
            </p>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-blue-50 to-cyan-100",
  },
  {
    id: 19,
    title: "Testing Strategy",
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-purple-900 mb-6 text-center">
          Testing & Quality Assurance
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-2xl text-blue-800 mb-4">
              🧪 Unit Testing
            </h3>
            <ul className="space-y-2 text-lg text-gray-700">
              <li>• Test individual functions</li>
              <li>• Jest / Mocha frameworks</li>
              <li>• 80%+ code coverage</li>
              <li>• Automated test runs</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-2xl text-green-800 mb-4">
              🔗 Integration Testing
            </h3>
            <ul className="space-y-2 text-lg text-gray-700">
              <li>• API endpoint testing</li>
              <li>• Database operations</li>
              <li>• Module interactions</li>
              <li>• End-to-end flows</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-2xl text-purple-800 mb-4">
              👥 User Acceptance Testing
            </h3>
            <ul className="space-y-2 text-lg text-gray-700">
              <li>• Real user scenarios</li>
              <li>• Feedback collection</li>
              <li>• Usability testing</li>
              <li>• Performance validation</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-2xl text-orange-800 mb-4">
              🔒 Security Testing
            </h3>
            <ul className="space-y-2 text-lg text-gray-700">
              <li>• Penetration testing</li>
              <li>• Vulnerability scanning</li>
              <li>• Auth/authorization checks</li>
              <li>• Data protection audit</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-purple-50 to-pink-100",
  },
  {
    id: 20,
    title: "Challenges & Solutions",
    content: (
      <div className="space-y-6">
        <h2 className="text-5xl font-bold text-red-900 mb-6 text-center">
          Challenges & Solutions
        </h2>
        <div className="space-y-4 text-xl">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 p-5 rounded-lg shadow">
              <h3 className="font-bold text-red-800 mb-2">❌ Challenge</h3>
              <p className="text-gray-700">Real-time order synchronization</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg shadow">
              <h3 className="font-bold text-green-800 mb-2">✅ Solution</h3>
              <p className="text-gray-700">WebSocket implementation</p>
            </div>
            <div className="bg-red-50 p-5 rounded-lg shadow">
              <h3 className="font-bold text-red-800 mb-2">❌ Challenge</h3>
              <p className="text-gray-700">Offline functionality</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg shadow">
              <h3 className="font-bold text-green-800 mb-2">✅ Solution</h3>
              <p className="text-gray-700">
                Progressive Web App with service workers
              </p>
            </div>
            <div className="bg-red-50 p-5 rounded-lg shadow">
              <h3 className="font-bold text-red-800 mb-2">❌ Challenge</h3>
              <p className="text-gray-700">Data security concerns</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg shadow">
              <h3 className="font-bold text-green-800 mb-2">✅ Solution</h3>
              <p className="text-gray-700">
                End-to-end encryption, secure auth
              </p>
            </div>
            <div className="bg-red-50 p-5 rounded-lg shadow">
              <h3 className="font-bold text-red-800 mb-2">❌ Challenge</h3>
              <p className="text-gray-700">Scalability for peak hours</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg shadow">
              <h3 className="font-bold text-green-800 mb-2">✅ Solution</h3>
              <p className="text-gray-700">
                Cloud hosting with auto-scaling
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-red-50 to-orange-100",
  },
  {
    id: 21,
    title: "Cost Analysis",
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-green-900 mb-6 text-center">
          Cost Analysis & ROI
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-3xl text-blue-800 mb-4">
              💰 Development Costs
            </h3>
            <div className="space-y-3 text-xl">
              <div className="flex justify-between border-b pb-2">
                <span>Frontend Development</span>
                <span className="font-semibold">₹50,000</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Backend Development</span>
                <span className="font-semibold">₹60,000</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Database Setup</span>
                <span className="font-semibold">₹20,000</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Testing & QA</span>
                <span className="font-semibold">₹30,000</span>
              </div>
              <div className="flex justify-between font-bold text-2xl pt-2">
                <span>Total</span>
                <span className="text-green-700">₹1,60,000</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-green-50 p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-2xl text-green-800 mb-3">
                📈 Expected Benefits
              </h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li>• 40% faster billing process</li>
                <li>• 95% reduction in billing errors</li>
                <li>• 30% increase in efficiency</li>
                <li>• Better inventory management</li>
                <li>• Improved customer satisfaction</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-2xl text-blue-800 mb-3">
                💵 Monthly Costs
              </h3>
              <p className="text-lg text-gray-700">
                Hosting: ₹2,000 | Maintenance: ₹5,000
              </p>
              <p className="font-bold text-xl text-blue-900 mt-2">
                Total: ₹7,000/month
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-green-50 to-emerald-100",
  },
  {
    id: 22,
    title: "Future Enhancements",
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-cyan-900 mb-6 text-center">
          Future Enhancements
        </h2>
        <div className="grid grid-cols-2 gap-6 text-xl">
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="font-bold text-2xl text-blue-800 mb-2">
              Mobile App
            </h3>
            <p className="text-gray-700">
              Native iOS & Android apps for customers to order and track
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-3">💳</div>
            <h3 className="font-bold text-2xl text-green-800 mb-2">
              Payment Integration
            </h3>
            <p className="text-gray-700">
              UPI, cards, wallets integration for digital payments
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="font-bold text-2xl text-purple-800 mb-2">
              AI Recommendations
            </h3>
            <p className="text-gray-700">
              ML-based menu suggestions and demand forecasting
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-3">🏪</div>
            <h3 className="font-bold text-2xl text-orange-800 mb-2">
              Multi-location
            </h3>
            <p className="text-gray-700">
              Support for managing multiple café branches
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-3">🎙️</div>
            <h3 className="font-bold text-2xl text-pink-800 mb-2">
              Voice Orders
            </h3>
            <p className="text-gray-700">
              Voice-based order taking for faster processing
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-bold text-2xl text-indigo-800 mb-2">
              Advanced Analytics
            </h3>
            <p className="text-gray-700">
              Predictive analytics and business intelligence
            </p>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-cyan-50 to-blue-100",
  },
  {
    id: 23,
    title: "Demo & Screenshots",
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-teal-900 mb-6 text-center">
          System Demo
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-teal-300">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-48 rounded-lg flex items-center justify-center mb-4">
              <div className="text-white text-center">
                <div className="text-5xl mb-2">🖥️</div>
                <p className="text-xl font-bold">Dashboard View</p>
              </div>
            </div>
            <p className="text-center text-gray-700">
              Main dashboard with key metrics and quick actions
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-teal-300">
            <div className="bg-gradient-to-br from-green-400 to-green-600 h-48 rounded-lg flex items-center justify-center mb-4">
              <div className="text-white text-center">
                <div className="text-5xl mb-2">🧾</div>
                <p className="text-xl font-bold">POS Interface</p>
              </div>
            </div>
            <p className="text-center text-gray-700">
              Clean billing interface with quick item selection
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-teal-300">
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 h-48 rounded-lg flex items-center justify-center mb-4">
              <div className="text-white text-center">
                <div className="text-5xl mb-2">📊</div>
                <p className="text-xl font-bold">Analytics Page</p>
              </div>
            </div>
            <p className="text-center text-gray-700">
              Visual reports with charts and graphs
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-teal-300">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 h-48 rounded-lg flex items-center justify-center mb-4">
              <div className="text-white text-center">
                <div className="text-5xl mb-2">📦</div>
                <p className="text-xl font-bold">Inventory Management</p>
              </div>
            </div>
            <p className="text-center text-gray-700">
              Stock tracking with alerts and notifications
            </p>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-teal-50 to-green-100",
  },
  {
    id: 24,
    title: "Conclusion",
    content: (
      <div className="space-y-8">
        <h2 className="text-5xl font-bold text-purple-900 mb-8 text-center">
          Conclusion
        </h2>
        <div className="space-y-6 text-2xl">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-3xl text-purple-800 mb-4 text-center">
              ✅ Project Summary
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              The Smart Cafe Management System successfully addresses the key
              challenges faced by small and medium cafés in India through an
              affordable, user-friendly, and comprehensive web-based solution.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-xl">
            <div className="bg-green-50 p-5 rounded-lg shadow text-center">
              <div className="text-4xl mb-2">✓</div>
              <p className="font-semibold text-green-800">
                Automated Operations
              </p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg shadow text-center">
              <div className="text-4xl mb-2">✓</div>
              <p className="font-semibold text-blue-800">Cost Effective</p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg shadow text-center">
              <div className="text-4xl mb-2">✓</div>
              <p className="font-semibold text-purple-800">Scalable Design</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg shadow-lg">
            <p className="text-2xl text-center font-semibold text-purple-900">
              This system will improve efficiency, reduce errors, and enhance
              customer satisfaction while remaining accessible to local
              businesses.
            </p>
          </div>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-purple-50 to-pink-100",
  },
  {
    id: 25,
    title: "Thank You",
    content: (
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <div className="text-8xl mb-6">🙏</div>
        <h1 className="text-7xl font-bold text-amber-900 text-center">
          Thank You
        </h1>
        <div className="mt-8 text-3xl text-gray-700 text-center space-y-4">
          <p className="font-semibold">Questions & Discussion</p>
          <div className="mt-12 text-2xl space-y-2">
            <p>📧 [email@example.com]</p>
            <p>📱 [Contact Number]</p>
            <p>🌐 [Project Repository / Website]</p>
          </div>
        </div>
        <div className="mt-12 text-xl text-gray-600 text-center">
          <p>Smart Cafe Management System</p>
          <p className="mt-2">B.Tech Mini Project Presentation</p>
        </div>
      </div>
    ),
    bg: "bg-gradient-to-br from-yellow-50 to-orange-100",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentSlide < slides.length - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else if (e.key === "ArrowLeft" && currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Main Slide Area */}
      <div
        className={`flex-1 ${slides[currentSlide].bg} transition-colors duration-500 p-12 overflow-auto`}
      >
        {slides[currentSlide].content}
      </div>

      {/* Navigation Controls */}
      <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="px-6 py-2 bg-blue-600 rounded disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-blue-700 transition"
        >
          ← Previous
        </button>

        <div className="flex items-center space-x-2">
          <span className="text-lg">
            Slide {currentSlide + 1} of {slides.length}
          </span>
          <div className="flex space-x-1 ml-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentSlide ? "bg-blue-500 w-8" : "bg-gray-500"
                }`}
                title={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="px-6 py-2 bg-blue-600 rounded disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-blue-700 transition"
        >
          Next →
        </button>
      </div>

      {/* Keyboard Hint */}
      <div className="bg-gray-900 text-gray-400 text-center py-2 text-sm">
        Use ← → arrow keys or click buttons to navigate
      </div>
    </div>
  );
}
