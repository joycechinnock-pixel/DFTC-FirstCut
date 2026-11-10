"use strict";
function reviewDeskAction(input) {
  const role = input.role;
  const staff = role === "owner" || role === "admin" || role === "support";
  const signupAccepted = input.signupAccepted !== false;
  const memberCalled = input.memberCalled !== false;
  if (input.plateUsedAsPermission) return { allowed: false, passwordTaken: false };
  if (input.action === "start") return { allowed: staff && signupAccepted && memberCalled, passwordTaken: false };
  if (input.action === "discount") {
    const pct = Number(input.discountPct);
    const reason = String(input.reason || "").trim();
    return { allowed: (role === "owner" || role === "admin") && pct >= 1 && pct <= 100 && reason.length >= 8, passwordTaken: false };
  }
  return { allowed: staff && signupAccepted, passwordTaken: false };
}
function scanBundle(source) {
  const text = String(source || "");
  const bad = [/(?:password|passwd|pwd)\s*[:=]\s*["'][^"']{4,}["']/i, /(?:api[_-]?key|client_secret)\s*[:=]\s*["'][^"']{6,}["']/i, /grant_type\s*=\s*password/i];
  return bad.map((pattern, i) => ({ label: "check " + i, pass: !pattern.test(text) }));
}
module.exports = { reviewDeskAction, scanBundle };
