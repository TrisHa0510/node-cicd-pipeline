readme_content = """<div align="center">

# ⚙️ Automated Node.js CI/CD Pipeline

<p align="center">
  <img src="https://github.com/TrisHa0510/node-cicd-pipeline/actions/workflows/main.yml/badge.svg" alt="CI/CD Pipeline"/>
  &nbsp;
  <img src="https://img.shields.io/badge/Node.js-20-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js"/>
  &nbsp;
  <img src="https://img.shields.io/badge/Docker-Containerized-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker"/>
  &nbsp;
  <img src="https://img.shields.io/badge/Render-Live-46E3B7?style=flat&logo=render&logoColor=white" alt="Render"/>
  &nbsp;
  <img src="https://img.shields.io/badge/GitHub_Actions-Automated-2088FF?style=flat&logo=github-actions&logoColor=white" alt="GitHub Actions"/>
</p>

<p align="center">
  <i>Push code → Tests run → Docker image built → App deployed. Automatically.</i>
</p>

</div>

---

## 📖 About

This project demonstrates a production-grade **CI/CD pipeline** using modern DevOps tools. Every push to the `main` branch automatically triggers a 3-stage pipeline — no manual steps required.

- 🔁 **Continuous Integration** — code is built and tested on every push
- 🐳 **Containerization** — Docker image is built and pushed to Docker Hub
- 🚀 **Continuous Deployment** — app is deployed to Render automatically

---

## 🔄 Pipeline Architecture

```mermaid
flowchart LR
    A([👨‍💻 git push]) --> B[GitHub\nActions]
    B --> C[🧪 Build\n& Test]
    C --> D{Tests\nPassed?}
    D -- ❌ Fail --> E([🚫 Pipeline\nStopped])
    D -- ✅ Pass --> F[🐳 Docker\nBuild & Push]
    F --> G[🚀 Deploy\nto Render]
    G --> H([🌐 App\nLive])

    style A fill:#238636,color:#fff,stroke:none
    style H fill:#46E3B7,color:#000,stroke:none
    style E fill:#da3633,color:#fff,stroke:none
    style D fill:#1f6feb,color:#fff,stroke:none
```

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology | Role |
|-------|-----------|------|
| **App** | Node.js 20 + Express | Web server |
| **Pipeline** | GitHub Actions | CI/CD automation |
| **Container** | Docker + Docker Hub | Build & registry |
| **Deploy** | Render | Cloud hosting |
| **Security** | GitHub Secrets | Credential management |

</div>

---

## 📁 Project Structure

```
📦 node-cicd-pipeline
 ┣ 📂 .github
 ┃ ┗ 📂 workflows
 ┃   ┗ 📜 main.yml        ← CI/CD pipeline definition
 ┣ 📜 Dockerfile           ← Container build instructions
 ┣ 📜 server.js            ← Node.js application entry point
 ┣ 📜 package.json         ← Dependencies & npm scripts
 ┗ 📜 README.md
```

---

## 🔐 Secrets Configuration

> **Repo → Settings → Secrets and Variables → Actions → New repository secret**

| Secret | Value |
|--------|-------|
| `DOCKERHUB_USERNAME` | Your Docker Hub username |
| `DOCKERHUB_TOKEN` | Docker Hub access token (not password) |
| `RENDER_DEPLOY_HOOK` | Deploy hook URL from Render dashboard |

---

## 🐳 Run Locally

```bash
# Clone
git clone https://github.com/TrisHa0510/node-cicd-pipeline.git
cd node-cicd-pipeline

# Option 1 — Node directly
npm install && node server.js

# Option 2 — Docker
docker build -t node-cicd-pipeline .
docker run -p 3000:3000 node-cicd-pipeline
```

> App available at `http://localhost:3000`

---

## 📸 Pipeline in Action

| GitHub Actions | Deployed App |
|---|---|
| *(Add screenshot of green pipeline)* | *(Add screenshot of live app)* |

> To add screenshots: create an `assets/` folder, add `.png` files, and replace the placeholders above with `![Pipeline](./assets/pipeline.png)`

---

## 💡 CI/CD Concepts

| Term | Meaning |
|------|---------|
| **CI** | Auto-build and test on every code push |
| **CD** | Auto-deploy after every successful test |
| **Docker Image** | Packaged app that runs identically everywhere |
| **Deploy Hook** | A URL that triggers redeployment when called |
| **GitHub Secrets** | Encrypted storage for tokens and credentials |

---

<div align="center">

## 👩‍💻 Author

**Trisha Patil**

[![GitHub](https://img.shields.io/badge/GitHub-TrisHa0510-181717?style=flat&logo=github)](https://github.com/TrisHa0510)
[![Email](https://img.shields.io/badge/Email-23amtics036@gmail.com-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:23amtics036@gmail.com)

<br/>

*Made with ❤️ as part of a DevOps learning project*

</div>
"""

with open("README.md", "w", encoding="utf-8") as f:
    f.write(readme_content)

print("README.md created!")
