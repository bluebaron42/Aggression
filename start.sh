#!/bin/bash
# Quick Start Script for Aggression React App

echo "🧠 Aggression Psychology Lesson App"
echo "===================================="
echo ""
echo "Starting development server..."
echo ""

cd /workspaces/Aggression

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "🚀 Starting Vite dev server..."
echo "📍 Access at: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
