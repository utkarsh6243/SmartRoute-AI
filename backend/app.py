from fastapi import FastAPI

app = FastAPI(
    title="SmartRoute AI",
    description="AI-Powered Traffic Prediction & Route Recommendation for India",
    version="1.0.0"
)


@app.get("/")
def home():
    return {
        "message": "Welcome to SmartRoute AI!",
        "status": "Backend is running successfully."
    }


@app.get("/health")
def health():
    return {
        "status": "Healthy",
        "server": "Running"
    }