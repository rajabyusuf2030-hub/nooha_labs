# Nooha Labs Production Runbook V1.0

## 1. Deployment & Infrastructure
### 1.1 Deployment Flow
1.  **Staging:** Merges to `develop` branch trigger automated build and deployment to the staging environment.
2.  **Production:** Merges to `main` branch trigger a production build. Manual approval in GitHub Actions is required before deployment.
3.  **Rollback:** To undo a release, use the `Rollback` workflow in GitHub Actions or re-deploy the previous successful build ID.

### 1.2 Database Management
- **Backups:** Multi-region automated snapshots every 24 hours.
- **Migration:** All schema changes must be applied via the `@nooha/backend-core` migration system. Never modify Firestore structures manually in the console.
- **Restoration:** In case of data loss, initiate the `Restore Snapshot` protocol via Google Cloud Console using the most recent verified backup.

---

## 2. Commercial Operations
### 2.1 Payment Failure Recovery
- **Scenario:** M-Pesa callback received with `ResultCode != 0`.
- **Action:** System logs a `FAILED` transaction. Admin must verify via Daraja Portal if the user claims payment was deducted.
- **Manual Reconciliation:** If payment is confirmed but callback failed, use the `Manual Reconcile` tool in the Admin Hub to update the transaction state and trigger license issuance.

### 2.2 Licensing Issues
- **Activation Failures:** Check the `deviceConstraint` logs. If a device was swapped, the admin may need to `REVOKE` the old device ID to allow a new activation.
- **Expired Licenses:** System automatically enters `READ_ONLY` mode. Renewals trigger an update to the `expiryDate` without requiring a new license key.

---

## 3. Incident Response
### 3.1 Outage Protocol
1.  **Identify:** Monitoring alerts trigger via `AlertDispatcher`.
2.  **Communicate:** Update `/status` page to `DEGRADED` or `OUTAGE`.
3.  **Investigate:** Inspect logs via Google Cloud Logging using the `requestId` from the alert.
4.  **Resolve:** Patch or scale infrastructure.
5.  **Audit:** Post-mortem report required for any outage exceeding 15 minutes.

### 3.2 Security Incident
- **Data Breach Suspected:** Immediately trigger `MAINTENANCE` mode on the Platform Core.
- **Session Revocation:** Use the global `Auth Revoke` command to invalidate all active tokens.
- **Notification:** Inform affected institutions within 4 hours as per the Legal Data Handling policy.

---

## 4. Continuity & Contacts
- **Primary Technical:** engineering@noohalabs.com
- **Emergency Ops:** ops-alert@noohalabs.com
- **Infrastructure Provider:** Google Cloud Platform (Status: status.cloud.google.com)
