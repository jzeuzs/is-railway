from os import getenv

VARS = [
    "RAILWAY_STATIC_URL",
    "RAILWAY_ENVIRONMENT",
    "RAILWAY_HEALTHCHECK_TIMEOUT_SEC",
    "RAILWAY_GIT_COMMIT_SHA",
    "RAILWAY_GIT_AUTHOR",
    "RAILWAY_GIT_BRANCH",
    "RAILWAY_GIT_REPO_NAME",
    "RAILWAY_GIT_REPO_OWNER",
    "RAILWAY_GIT_COMMIT_MESSAGE",
]

def check() -> bool:
    return len([val for val in VARS if getenv(val) != None]) > 0