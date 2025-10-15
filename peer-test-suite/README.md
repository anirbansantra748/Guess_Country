# peer-test-suite

Test suite repo designed to trigger analyzers across languages & infra:
- Security: secrets, SSRF, path traversal, unsafe deserialization
- Logic: missing null checks, inconsistent return types
- Performance: O(n^2), sync I/O, unbatched DB calls
- Dependency: vulnerable/outdated packages
- IaC: public S3, unpinned images, privileged containers
- Style & Maintainability: messy formatting, unused imports, large functions
- License: deliberately include packages/licenses to be flagged

Usage:
1. Clone and push to GitHub.
2. Create a PR or push commits to trigger your analyzer.
3. Inspect findings in your app / MongoDB...
