#!/bin/bash

# This script starts the production server with the correct environment variables
# Usage: ./scripts/start-production.sh

# Set environment variables
export NODE_ENV=production

# Check if OPENAI_API_KEY is already set
if [ -z "$OPENAI_API_KEY" ]; then
  # Try to get it from .env file
  if [ -f .env ]; then
    echo "Loading OPENAI_API_KEY from .env file..."
    export OPENAI_API_KEY=$(grep OPENAI_API_KEY .env | cut -d '=' -f2)
  fi
  
  # Try to get it from .env.local file
  if [ -z "$OPENAI_API_KEY" ] && [ -f .env.local ]; then
    echo "Loading OPENAI_API_KEY from .env.local file..."
    export OPENAI_API_KEY=$(grep OPENAI_API_KEY .env.local | cut -d '=' -f2)
  fi
  
  # Try to get it from .env.production file
  if [ -z "$OPENAI_API_KEY" ] && [ -f .env.production ]; then
    echo "Loading OPENAI_API_KEY from .env.production file..."
    export OPENAI_API_KEY=$(grep OPENAI_API_KEY .env.production | cut -d '=' -f2)
  fi
fi

# Check if we have the API key
if [ -z "$OPENAI_API_KEY" ]; then
  echo "ERROR: OPENAI_API_KEY is not set!"
  echo "Please set it in your environment or in a .env file."
  exit 1
fi

# Print environment variables
echo "Environment variables:"
echo "NODE_ENV: $NODE_ENV"
echo "OPENAI_API_KEY: ${OPENAI_API_KEY:0:4}...${OPENAI_API_KEY: -4} (${#OPENAI_API_KEY} chars)"

# Start the production server
echo "Starting production server..."
next start -p 5000 -H 0.0.0.0
