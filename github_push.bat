@echo off
:: Cave Fightwear - GitHub Push Script for Windows
:: This script pushes the project to a private GitHub repository.
:: Usage: github_push.bat <github-repo-url>
:: Example: github_push.bat https://github.com/username/cave-fightwear.git

setlocal enabledelayedexpansion

echo.
echo ==================================
echo   Cave Fightwear - GitHub Push   
echo ==================================
echo.

:: Check if GitHub URL is provided
set "REPO_URL=%~1"

if "%REPO_URL%"=="" (
    echo Usage: github_push.bat ^<github-repo-url^>
    echo Example: github_push.bat https://github.com/username/cave-fightwear.git
    echo.
    set /p REPO_URL="Enter your GitHub repository URL: "
)

if "%REPO_URL%"=="" (
    echo Error: No repository URL provided. Exiting.
    exit /b 1
)

echo.
echo Repository URL: %REPO_URL%
echo.

:: Check if git is initialized
if not exist ".git" (
    echo Initializing git repository...
    git init
    echo [OK] Git repository initialized
) else (
    echo [OK] Git repository already exists
)

:: Add remote origin (remove if exists first)
echo Setting up remote origin...
git remote remove origin 2>nul
git remote add origin "%REPO_URL%"
echo [OK] Remote origin configured

:: Stage all files
echo Staging all files...
git add .
echo [OK] Files staged

:: Commit
echo Creating commit...
git commit -m "Initial commit: Cave Fightwear V2 Core"
echo [OK] Commit created

:: Push to GitHub
echo Pushing to GitHub...
git branch -M main
git push -u origin main

echo.
echo ==================================
echo   [OK] Successfully pushed to GitHub
echo ==================================
echo.
echo Repository: %REPO_URL%
echo.

pause
