# Microsoft 365 Security Audit Checklist

## 🔐 Identity & Access Management

- [ ] **Multi-Factor Authentication (MFA)**
  - All users have MFA enabled (no exceptions)
  - SMS/phone call methods disabled (use app-based or hardware tokens)
  - Conditional Access policies enforcing MFA for all access

- [ ] **Conditional Access Policies**
  - Block legacy authentication protocols
  - Require compliant or hybrid-joined devices for access
  - Block access from high-risk locations
  - Session controls for sensitive apps (SharePoint, Admin portals)

- [ ] **Password Policies**
  - Password expiration disabled (NIST guidance)
  - Banned password list enabled
  - Password protection for on-premises AD (if hybrid)

- [ ] **Guest Access**
  - Guest users reviewed and cleaned up quarterly
  - Guest access restricted to specific SharePoint sites/Teams
  - External sharing settings documented and appropriate
  - B2B collaboration policy configured

- [ ] **Admin Accounts**
  - Separate cloud-only admin accounts (not synced from on-prem)
  - Admin accounts have strong unique passwords + hardware MFA
  - Global Admin role assigned to minimum 2, maximum 4 accounts
  - Privileged roles use just-in-time access (PIM)

---

## 📧 Email & Exchange Online Security

- [ ] **Anti-Phishing Policies**
  - Impersonation protection enabled for key users/domains
  - Mailbox intelligence and spoofing intelligence enabled
  - Safety tips displayed on suspicious emails

- [ ] **Anti-Spam & Malware**
  - Advanced threat protection (ATP/Defender for Office 365) enabled
  - Safe Links and Safe Attachments enabled for all users
  - Quarantine policies reviewed monthly
  - Zero-hour auto purge (ZAP) enabled

- [ ] **Mail Flow Rules**
  - All mail flow rules documented and reviewed
  - Rules blocking executable attachments (.exe, .js, .vbs, etc.)
  - Rules forwarding mail externally reviewed and justified

- [ ] **External Email Warnings**
  - External email warning banners enabled
  - Users trained to recognize external email indicators

---

## 🗂️ SharePoint & OneDrive Security

- [ ] **External Sharing Settings**
  - Default link type set to "Specific People" (not "Anyone")
  - "Anyone" links disabled or limited to specific sites
  - Link expiration enabled for "Anyone" links (if allowed)
  - External sharing audit reports reviewed monthly

- [ ] **Data Loss Prevention (DLP)**
  - DLP policies defined for sensitive data (SSN, credit cards, PII)
  - Policies applied to SharePoint, OneDrive, Teams, Exchange
  - Policy violations reviewed and acted upon weekly

- [ ] **Access Review**
  - External users with access reviewed quarterly
  - Overly permissive site permissions identified and corrected
  - Unused sites archived or deleted

- [ ] **Versioning & Retention**
  - Version history enabled (minimum 30 versions)
  - Retention policies applied to prevent accidental deletion
  - Recycle bin retention set to 90+ days

---

## 👥 Microsoft Teams Security

- [ ] **Guest Access in Teams**
  - Guest access disabled or tightly controlled
  - Team owners trained to manage guest lifecycle
  - Guest activity audited monthly

- [ ] **Teams Creation Policy**
  - Teams creation restricted to authorized users/groups
  - Naming conventions enforced
  - Team ownership required (no orphaned teams)

- [ ] **App Permissions**
  - Third-party Teams apps reviewed and approved
  - User consent disabled (admin consent required)
  - Custom apps reviewed for security before deployment

---

## 💻 Endpoint Management (Intune)

- [ ] **Device Enrollment**
  - All company devices enrolled in Intune
  - BYOD policy defined and communicated
  - Conditional Access requires compliant devices

- [ ] **Compliance Policies**
  - Device encryption required (BitLocker/FileVault)
  - OS version requirements enforced
  - Jailbroken/rooted devices blocked

- [ ] **Configuration Policies**
  - Windows security baselines deployed
  - Antivirus/Defender policies configured
  - Firewall enabled and configured
  - Removable media policies (USB restrictions)

- [ ] **App Protection**
  - Mobile app management (MAM) policies deployed
  - Copy/paste restrictions for corporate data on personal devices
  - Require PIN or biometric for corporate apps

---

## 📊 Monitoring & Auditing

- [ ] **Audit Logging**
  - Unified audit log enabled for all workloads
  - 90-day retention (or longer with E5/compliance license)
  - Key events monitored: admin actions, external sharing, DLP violations

- [ ] **Alert Policies**
  - Alerts configured for:
    - Unusual admin activity
    - Mass file deletion
    - External sharing of sensitive content
    - Ransomware activity patterns
  - Alerts routed to security team and reviewed daily

- [ ] **Microsoft Secure Score**
  - Secure Score reviewed monthly
  - High-impact recommendations prioritized
  - Score > 70% (target)

- [ ] **Sign-In Logs & Risk Events**
  - Risky sign-ins reviewed daily
  - Identity Protection policies enabled (E5)
  - Failed sign-in attempts monitored for brute force attacks

---

## 🛡️ Threat Protection

- [ ] **Microsoft Defender for Office 365**
  - Plan 1 or Plan 2 enabled
  - Attack simulation training run quarterly
  - Threat Explorer used to investigate incidents

- [ ] **Microsoft Defender for Endpoint**
  - Deployed to all endpoints (if licensed)
  - Real-time protection enabled
  - Attack surface reduction (ASR) rules configured

- [ ] **Microsoft Defender for Cloud Apps**
  - Connected to M365 apps
  - Anomaly detection policies enabled
  - Shadow IT discovery reviewed monthly

---

## 📋 Governance & Compliance

- [ ] **Retention Policies**
  - Retention policies applied to Exchange, SharePoint, Teams
  - Legal hold capabilities documented
  - Disposition review process in place

- [ ] **Sensitivity Labels**
  - Labels defined (Confidential, Internal, Public)
  - Auto-labeling rules configured where appropriate
  - Label usage audited

- [ ] **Information Barriers**
  - Configured for organizations requiring data separation (legal, finance, etc.)

- [ ] **Compliance Manager**
  - Assessments run for relevant regulations (HIPAA, GDPR, etc.)
  - Improvement actions tracked and remediated

---

## 🔄 Backup & Recovery

- [ ] **Third-Party Backup**
  - M365 data backed up to third-party solution (Veeam, AvePoint, etc.)
  - Backup tested quarterly (restore test)
  - Recovery time objective (RTO) and recovery point objective (RPO) documented

- [ ] **Exchange Online Protection**
  - Deleted item retention set to 30 days minimum
  - Litigation hold or retention policy applied to VIP mailboxes

---

## 📖 Documentation & Training

- [ ] **Security Policies Documented**
  - Acceptable Use Policy (AUP)
  - Incident Response Plan
  - Data Classification Policy
  - Guest Access Policy

- [ ] **User Security Training**
  - Annual security awareness training completed
  - Phishing simulation tests run quarterly
  - Results tracked and improvement actions taken

- [ ] **Admin Procedures**
  - Admin onboarding/offboarding procedures documented
  - Break-glass emergency access procedures documented
  - Security contact information up to date

---

## ✅ Scoring

**Total Items:** 70+

**Grading:**
- 90-100% ✅ **Excellent** - You're in great shape
- 75-89% 🟨 **Good** - A few gaps to close
- 50-74% 🟧 **Fair** - Significant work needed
- Below 50% 🟥 **At Risk** - Immediate action required

---

## 📞 Need Help?

If your score is below 75% or you need help implementing any of these controls:

**Polus LLC**  
Oklahoma IT Systems Consulting  
📧 jack.washmon@polus-cs.com  
🌐 https://polus-cs.com  
📅 Book a free discovery call: https://polus-cs.com/book

We specialize in M365 security and governance for Oklahoma small businesses.
