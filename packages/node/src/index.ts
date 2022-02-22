const exists = (key?: string) => typeof key !== 'undefined';

/**
 * Checks if the process is running on Railway
 * @returns If the process is running on Railway
 * @example ```js
 * 'use strict';
 *
 * const isRailway = require('is-railway');
 *
 * if (isRailway()) console.log('Running in railway.');
 * ```
 */
const isRailway = () =>
	exists(
		process.env.RAILWAY_STATIC_URL ||
			process.env.RAILWAY_ENVIRONMENT ||
			process.env.RAILWAY_HEALTHCHECK_TIMEOUT_SEC ||
			process.env.RAILWAY_GIT_COMMIT_SHA ||
			process.env.RAILWAY_GIT_AUTHOR ||
			process.env.RAILWAY_GIT_BRANCH ||
			process.env.RAILWAY_GIT_REPO_NAME ||
			process.env.RAILWAY_GIT_REPO_OWNER ||
			process.env.RAILWAY_GIT_COMMIT_MESSAGE
	);

export { isRailway };
export default isRailway;
module.exports = isRailway;
