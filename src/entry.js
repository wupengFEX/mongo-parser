/**
 * @file entry function
 * @author Jackson <smartfutureplayer@gmail.com>
 */
const deepClone = require('deep-clone');

class MSP {
	/**
	 * Travis object and replce mongo characters
	 *
	 * @param {Object} obj Object to be escaped
	 * @param {Function} cb callback for replace mongo characters
	 * @return {Object} escaped object
	 */
	static crawl (obj, cb) {
		if (obj && typeof obj === 'object') {
			if (Array.isArray(obj)) {
				obj.forEach((item, index) => {
					obj[index] = this.crawl(item, cb);
				});
			} else {
				Object.keys(obj).forEach((key) => {
					const k = cb(key);
					const v = deepClone(obj[key]);
					delete obj[key];
					obj[k] = this.crawl(v, cb);
				});
			}
		} else if (typeof obj === 'string') {
			obj = cb(obj);
		}
		return obj;
	}


	/**
	 * Escape mongo characters from object
	 *
	 * @param {Object} obj Object to be escaped
	 * @return {Object} escaped object
	 */
	static escape(obj) {
		return this.crawl(obj, (item) => {
			return item.replace(/\$/g, '\uFF04').replace(/\./g, '\uFF0E');
		});
	}

	/**
	 * Unescapes mongo characters from object
	 *
	 * @param {Object} obj
	 * @return {Object} unescaped object
	 */
	static unescape(obj) {
		return JSON.parse(JSON.stringify(obj).replace(/\uFF04/g, '$').replace(/\uFF0E/g, '.'));
	}
}

module.exports = MSP;