use std::env::var;

static TO_CHECK: &[&str] = &[
    "RAILWAY_STATIC_URL",
    "RAILWAY_ENVIRONMENT",
    "RAILWAY_HEALTHCHECK_TIMEOUT_SEC",
    "RAILWAY_GIT_COMMIT_SHA",
    "RAILWAY_GIT_AUTHOR",
    "RAILWAY_GIT_BRANCH",
    "RAILWAY_GIT_REPO_NAME",
    "RAILWAY_GIT_REPO_OWNER",
    "RAILWAY_GIT_COMMIT_MESSAGE",
];

/// Checks if the process is running on Railway
///
/// #### Example
/// ```rust
/// use is_railway::check;
///
/// let is_running = check();
/// println!("{}", is_running);
/// ```
pub fn check() -> bool {
    TO_CHECK.iter().map(var).flatten().count() > 0
}
