/**
 * @file entry test case
 * @author Jackson <smartfutureplayer@gmail.com>
 */

const msp = require('../src/entry');
const expect = require('chai').expect;
const escapeTPL = {
	ek: {
		"$instance": "ins",
		".instance": "ins"
	},
	vek: {
		"ins1": "$instance",
		"ins2": ".instance"
	},
	unek: {
		"＄instance": "ins",
		"．instance": "ins"
	},
	unvek: {
		"ins1": "＄instance",
		"ins2": "．instance"
	}
}


describe('escape', function () {
	it('key escape', () => {
		const res = msp.escape(escapeTPL.ek);
		expect(res['＄instance']).to.be.equal('ins');
		expect(res['．instance']).to.be.equal('ins');
	});
	it('value escape', () => {
		const res = msp.escape(escapeTPL.vek);
		expect(res['ins1']).to.be.equal('＄instance');
		expect(res['ins2']).to.be.equal('．instance');
	});
});

describe('unescape', function () {
	it('key unescape', () => {
		const res = msp.unescape(escapeTPL.unek);
		expect(res['$instance']).to.be.equal('ins');
		expect(res['.instance']).to.be.equal('ins');
	});
	it('value unescape', () => {
		const res = msp.unescape(escapeTPL.unvek);
		expect(res['ins1']).to.be.equal('$instance');
		expect(res['ins2']).to.be.equal('.instance');
	});
});