#!/bin/bash

# Cave Fightwear - GitHub Push Script
# This script pushes the project to a private GitHub repository.
# Usage: ./github_push.sh <github-repo-url>
# Example: ./github_push.sh https://github.com/username/cave-fightwear.git

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}==================================${NC}"
echo -e "${GREEN}  Cave Fightwear - GitHub Push    ${NC}"
echo -e "${GREEN}==================================${NC}"
echo ""

# Check if GitHub URL is provided
if [ -z "$1" ]; then
    echo -e "${YELLOW}Usage: ./github_push.sh <github-repo-url>${NC}"
    echo -e "${YELLOW}Example: ./github_push.sh https://github.com/username/cave-fightwear.git${NC}"
    echo ""
    read -p "Enter your GitHub repository URL: " REPO_URL
else
    REPO_URL=$1
fi

# Validate URL
if [ -z "$REPO_URL" ]; then
    echo -e "${RED}Error: No repository URL provided. Exiting.${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}🔗 Repository URL: ${REPO_URL}${NC}"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}Initializing git repository...${NC}"
    git init
    echo -e "${GREEN}✓ Git repository initialized${NC}"
else
    echo -e "${GREEN}✓ Git repository already exists${NC}"
fi

# Add remote origin (remove if exists first)
echo -e "${YELLOW}Setting up remote origin...${NC}"
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"
echo -e "${GREEN}✓ Remote origin configured${NC}"

# Stage all files
echo -e "${YELLOW}Staging all files...${NC}"
git add .
echo -e "${GREEN}✓ Files staged${NC}"

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo -e "${YELLOW}No changes to commit. Pushing existing commits...${NC}"
else
    # Commit
    echo -e "${YELLOW}Creating commit...${NC}"
    git commit -m "Initial commit: Cave Fightwear V2 Core"
    echo -e "${GREEN}✓ Commit created${NC}"
fi

# Push to GitHub
echo -e "${YELLOW}Pushing to GitHub...${NC}"
git branch -M main
git push -u origin main

echo ""
echo -e "${GREEN}==================================${NC}"
echo -e "${GREEN}  ✓ Successfully pushed to GitHub ${NC}"
echo -e "${GREEN}==================================${NC}"
echo ""
echo -e "Repository: ${REPO_URL}"
echo ""
