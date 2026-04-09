readme_content = """# 🚀 Node.js CI/CD Pipeline

![CI/CD](https://github.com/TrisHa0510/node-cicd-pipeline/actions/workflows/main.yml/badge.svg)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue?logo=docker)
![Render](https://img.shields.io/badge/Deployed%20on-Render-46E3B7?logo=render)
![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js)

> A fully automated CI/CD pipeline that builds, tests, containerizes, and deploys a Node.js web application on every push to `main`.

---

## 📌 Project Overview

This project demonstrates end-to-end DevOps automation using **GitHub Actions**, **Docker**, and **Render**. Every code push triggers an automated pipeline that runs tests, builds a Docker image, pushes it to Docker Hub, and deploys to the cloud — with zero manual intervention.

---

## 🛠️ Tech Stack

| Tool           | Purpose                        |
|----------------|-------------------------------|
| Node.js 20     | Web application runtime        |
| GitHub Actions | CI/CD pipeline automation      |
| Docker         | Containerization               |
| Docker Hub     | Container image registry       |
| Render         | Cloud deployment platform      |

---

## ⚙️ Pipeline Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Developer Push                     │
│                  git push origin main                │
└─────────────────────┬───────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────┐
│              GitHub Actions Triggered                │
└──────┬──────────────────────────────────────────────┘
       │
       ▼
┌──────────────────┐     ┌──────────────────────────┐     ┌──────────────────┐
│  🧪 Build & Test │────▶│  🐳 Docker Build & Push  │────▶│ 🚀 Deploy Render │
│                  │     │                          │     │                  │
│  npm ci          │     │  docker build            │     │  Trigger deploy  │
│  npm test        │     │  push → Docker Hub       │     │  hook URL        │
└──────────────────┘     └──────────────────────────┘     └──────────────────┘
```

---

## 🔁 Pipeline Jobs

### 1. 🧪 Build & Test
- Checks out the repository
- Sets up Node.js 20 with npm cache
- Installs dependencies using `npm ci`
- Runs the test suite using `npm test`

### 2. 🐳 Docker Build & Push
- Sets up Docker Buildx
- Authenticates with Docker Hub using secrets
- Builds Docker image from `Dockerfile`
- Pushes image tagged as `:latest` to Docker Hub

### 3. 🚀 Deploy to Render
- Triggers Render deploy hook via HTTP POST
- Render pulls the latest Docker image and redeploys automatically

---

## 📁 Project Structure

```
node-cicd-pipeline/
├── .github/
│   └── workflows/
│       └── main.yml       # GitHub Actions CI/CD workflow
├── Dockerfile             # Docker container configuration
├── server.js              # Main Node.js application
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

---

## 🐳 Docker

**Build and run locally:**

```bash
# Build the image
docker build -t node-cicd-pipeline .

# Run the container
docker run -p 3000:3000 node-cicd-pipeline
```

App will be available at: `http://localhost:3000`

---

## 🔐 GitHub Secrets Setup

Go to **Repository → Settings → Secrets and Variables → Actions** and add:

| Secret Name           | Description                        |
|-----------------------|------------------------------------|
| `DOCKERHUB_USERNAME`  | Your Docker Hub username           |
| `DOCKERHUB_TOKEN`     | Your Docker Hub access token       |
| `RENDER_DEPLOY_HOOK`  | Your Render service deploy hook URL|

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- Docker Desktop
- GitHub account
- Docker Hub account
- Render account

### Local Setup

```bash
# Clone the repository
git clone https://github.com/TrisHa0510/node-cicd-pipeline.git

# Navigate to project directory
cd node-cicd-pipeline

# Install dependencies
npm install

# Run the application
node server.js
```

---

## 📊 How It Works

1. **Push code** to the `main` branch
2. **GitHub Actions** automatically detects the push
3. **Tests run** — if they fail, pipeline stops
4. **Docker image** is built and pushed to Docker Hub
5. **Render** receives a deploy hook and pulls the new image
6. **App is live** with the latest changes 🎉

---

## 👩‍💻 Author

**Trisha Patil**  
📧 23amtics036@gmail.com  
🐙 [GitHub @TrisHa0510](https://github.com/TrisHa0510)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
"""

with open("README.md", "w", encoding="utf-8") as f:
    f.write(readme_content)

print("README.md created successfully!")
print(f"Total characters: {len(readme_content)}")