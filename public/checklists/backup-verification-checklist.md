# Backup & Disaster Recovery Verification Checklist

## 🎯 Purpose

Use this checklist to verify your backup and disaster recovery systems actually work **before** you have an emergency. Most businesses discover their backups don't work when it's too late.

---

## 📊 Backup Coverage Assessment

### What's Being Backed Up?

- [ ] **Microsoft 365 Data**
  - [ ] Exchange Online (email & calendars)
  - [ ] SharePoint Online (sites & libraries)
  - [ ] OneDrive for Business (user files)
  - [ ] Microsoft Teams (chat history & files)
  - [ ] Third-party backup solution in place (M365 native retention ≠ backup)

- [ ] **File Servers & Network Storage**
  - [ ] On-premises file servers
  - [ ] NAS devices
  - [ ] Cloud storage (Dropbox, Box, Google Drive)

- [ ] **Databases**
  - [ ] SQL Server databases
  - [ ] MySQL/PostgreSQL databases
  - [ ] Application-specific databases (CRM, ERP, etc.)

- [ ] **Line-of-Business Applications**
  - [ ] Accounting software (QuickBooks, Xero, etc.)
  - [ ] CRM systems
  - [ ] Industry-specific applications
  - [ ] Custom applications

- [ ] **Workstations**
  - [ ] Critical user workstations backed up
  - [ ] Laptop data protected (OneDrive, endpoint backup)

- [ ] **System State & Configuration**
  - [ ] Server system state backups
  - [ ] Active Directory backups (if on-prem)
  - [ ] Network device configurations
  - [ ] Firewall/router configurations

---

## ⏰ Backup Frequency & Scheduling

- [ ] **Email & Collaboration**
  - Minimum: Daily backups
  - Recommended: Continuous/real-time

- [ ] **File Servers**
  - Minimum: Daily backups
  - Recommended: Multiple times per day

- [ ] **Databases**
  - Minimum: Daily full + transaction log backups
  - Recommended: Hourly transaction logs

- [ ] **Workstations**
  - Minimum: Weekly
  - Recommended: Daily or continuous

- [ ] **Backup Schedule Documented**
  - Backup windows defined and communicated
  - Maintenance windows don't overlap backup windows
  - Backup completion verified daily

---

## 🏢 Backup Storage & Retention

### Storage Locations

- [ ] **3-2-1 Rule Followed**
  - [ ] **3** copies of data (original + 2 backups)
  - [ ] **2** different storage types (disk, tape, cloud)
  - [ ] **1** off-site copy (cloud or remote location)

- [ ] **Primary Backup Location**
  - Location documented
  - Capacity monitored (>20% free space)
  - Access secured (encrypted, access control)

- [ ] **Off-Site/Cloud Backup**
  - Data encrypted in transit
  - Data encrypted at rest
  - Geo-redundancy enabled (if cloud)

- [ ] **Air-Gapped/Immutable Backups**
  - Backups protected from ransomware (offline tape, immutable storage)
  - At least one backup copy cannot be deleted/encrypted by attackers

### Retention Policy

- [ ] **Daily Backups**
  - Retention: _____ days (minimum 30 days recommended)

- [ ] **Weekly Backups**
  - Retention: _____ weeks (minimum 12 weeks recommended)

- [ ] **Monthly Backups**
  - Retention: _____ months (minimum 12 months recommended)

- [ ] **Annual Backups**
  - Retention: _____ years (minimum 7 years for compliance)

- [ ] **Retention Policy Documented**
  - Policy aligns with business needs and compliance requirements
  - Automatic deletion configured to enforce policy

---

## ✅ Backup Verification & Monitoring

### Daily Monitoring

- [ ] **Backup Success/Failure Alerts**
  - Email/SMS alerts configured for failed backups
  - Alerts routed to IT team and acknowledged daily
  - Escalation process for repeated failures

- [ ] **Backup Completion Reports**
  - Daily reports reviewed (manually or automated dashboard)
  - Missing backups investigated within 24 hours
  - Backup size monitored (sudden changes indicate issues)

- [ ] **Backup Job Health**
  - All backup jobs completed within backup window
  - No jobs consistently failing or timing out
  - Job duration trending tracked (increasing duration = problem)

### Backup Integrity

- [ ] **Backup Verification**
  - Backup software performs integrity checks
  - Hash/checksum verification enabled
  - Corrupted backups automatically re-attempted

- [ ] **Restore Testing**
  - **CRITICAL:** Last restore test date: __________
  - Restore tests performed quarterly (minimum)
  - Random file restores tested monthly
  - Full disaster recovery test performed annually

---

## 🔥 Disaster Recovery Testing

### Last Tested: __________ (Must be within 12 months)

- [ ] **Test Scenarios Defined**
  - [ ] Single file/email restoration
  - [ ] Database restoration
  - [ ] Server/VM restoration
  - [ ] Full site disaster recovery
  - [ ] Ransomware recovery simulation

- [ ] **Restore Time Objectives (RTO)**
  - **Email:** Restore within _____ hours (target: 4 hours)
  - **File Servers:** Restore within _____ hours (target: 8 hours)
  - **Databases:** Restore within _____ hours (target: 2 hours)
  - **Full System:** Restore within _____ days (target: 24-48 hours)
  - RTOs documented and communicated to stakeholders

- [ ] **Recovery Point Objectives (RPO)**
  - **Email:** Acceptable data loss: _____ hours (target: 1 hour)
  - **File Servers:** Acceptable data loss: _____ hours (target: 4 hours)
  - **Databases:** Acceptable data loss: _____ minutes (target: 15 min)
  - RPOs align with backup frequency

- [ ] **Restore Test Results**
  - All restore tests successful (data integrity verified)
  - Restore times met RTO requirements
  - Issues documented and remediated
  - Lessons learned documented

---

## 📋 Disaster Recovery Plan

- [ ] **DR Plan Documented**
  - Contact list (IT team, vendors, key stakeholders)
  - Recovery procedures for each system
  - Prioritization of systems (critical first)
  - Network diagrams and system dependencies

- [ ] **DR Plan Accessibility**
  - Physical copy stored off-site
  - Digital copy in cloud storage (not on systems being backed up)
  - All IT team members have access

- [ ] **Vendor Contact Information**
  - Backup software vendor support #
  - Cloud provider support #
  - Hardware vendor support # (if applicable)
  - MSP/IT consultant # (if applicable)

- [ ] **Runbooks Created**
  - Step-by-step recovery procedures
  - Screenshots and diagrams included
  - Tested by someone other than author (validation)

---

## 🔐 Backup Security

- [ ] **Encryption**
  - Backups encrypted at rest
  - Backups encrypted in transit
  - Encryption keys managed securely (not stored with backups)

- [ ] **Access Control**
  - Backup system access limited to authorized personnel
  - MFA required for backup system access
  - Audit logs enabled for backup system access

- [ ] **Ransomware Protection**
  - Backup accounts use unique passwords (not domain credentials)
  - Backup storage not accessible from production network
  - Immutable or WORM (write-once-read-many) backups configured

- [ ] **Compliance**
  - Backup retention meets regulatory requirements (HIPAA, SOX, etc.)
  - Data sovereignty requirements met (data stored in correct region)

---

## 🚨 Critical Gaps (Immediate Action Required)

These are show-stoppers. If any are unchecked, stop and fix immediately:

- [ ] ❌ **No backups exist** (you're one disaster away from losing everything)
- [ ] ❌ **Backups exist but never tested** (you're gambling)
- [ ] ❌ **No off-site backup** (fire/flood/ransomware wipes everything)
- [ ] ❌ **Backups not monitored** (failing silently for weeks)
- [ ] ❌ **No backup for M365** (Microsoft's native retention ≠ backup)
- [ ] ❌ **Backup system accessible from production network** (ransomware can delete backups)

---

## 📈 Scoring Your Backup Maturity

**Total "Core" Items (non-optional):** ~50

**Your Score:** _____ / 50

**Grading:**
- 90-100% ✅ **Excellent** - Gold standard backup & DR
- 75-89% 🟨 **Good** - Solid foundation, minor gaps
- 50-74% 🟧 **Fair** - Major risks exist, immediate attention needed
- Below 50% 🟥 **Critical** - Business-threatening gaps

---

## 🔧 Quick Wins (Do This Week)

1. **Find your last restore test date** - If it's over 6 months ago, schedule one now
2. **Check last backup status** - Log into your backup system and verify today's backup succeeded
3. **Document your RTO/RPO** - Write down how fast you need to recover and how much data loss is acceptable
4. **Verify off-site backup** - Confirm you have a copy of data outside your building/network
5. **Test one file restore** - Pick a random file and restore it (5 minutes to verify it works)

---

## 📞 Need Help?

If your score is below 75% or you've never tested a restore:

**Polus LLC**  
Oklahoma IT Systems Consulting  
📧 jack.washmon@polus-cs.com  
🌐 https://polus-cs.com  
📅 Book a free Backup & DR assessment: https://polus-cs.com/book

**Our Backup & DR Services:**
- Backup coverage assessment
- Restore testing & DR simulation
- Backup system implementation (M365, on-prem, hybrid)
- Disaster recovery planning & documentation
- Ransomware protection strategies

---

## 📝 Notes & Action Items

Use this space to document findings and action items:

---

**Assessment Date:** __________  
**Assessed By:** __________  
**Next Review Date:** __________  

---

*This checklist is provided by Polus LLC for educational purposes. Every business has unique needs—schedule a consultation to review your specific situation.*
