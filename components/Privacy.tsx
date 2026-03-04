import React from 'react';
import { Shield, Lock, Eye, FileText, Server, Globe, Cookie, Users } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6 font-sans">
       <div className="max-w-[1000px] mx-auto">
        
        <div className="mb-12 border-b border-gray-800 pb-12">
            <div className="flex items-center gap-3 text-dats-blue mb-4">
                <Shield size={24} />
                <span className="font-mono text-sm font-bold uppercase tracking-widest">Legal Document</span>
            </div>
            <h1 className="font-display font-black text-5xl md:text-7xl mb-6">PRIVACY POLICY</h1>
            <p className="font-mono text-gray-400 text-sm">
                Last Updated: October 24, 2026 <br/>
                Effective Date: January 1, 2026
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar / TOC */}
            <div className="lg:col-span-4 hidden lg:block sticky top-24 h-fit">
                <h3 className="font-bold text-white mb-4 uppercase text-sm tracking-widest border-b border-gray-800 pb-2">Contents</h3>
                <ul className="space-y-3 font-mono text-xs text-gray-500">
                    <li className="hover:text-dats-blue cursor-pointer">1. Introduction</li>
                    <li className="hover:text-dats-blue cursor-pointer">2. Data Collection</li>
                    <li className="hover:text-dats-blue cursor-pointer">3. Inference & Zero-Retention</li>
                    <li className="hover:text-dats-blue cursor-pointer">4. Data Usage</li>
                    <li className="hover:text-dats-blue cursor-pointer">5. Data Sharing</li>
                    <li className="hover:text-dats-blue cursor-pointer">6. Security</li>
                    <li className="hover:text-dats-blue cursor-pointer">7. International Transfers</li>
                    <li className="hover:text-dats-blue cursor-pointer">8. Your Rights</li>
                </ul>
                
                <div className="mt-12 p-6 bg-dats-gray border border-gray-700">
                    <h4 className="font-bold text-white mb-2">DPO Contact</h4>
                    <p className="text-gray-400 text-xs mb-4">For privacy inquiries and GDPR requests:</p>
                    <a href="mailto:privacy@gpucloud.xyz" className="text-dats-blue font-mono text-xs hover:underline">privacy@gpucloud.xyz</a>
                </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-gray-400 prose-p:font-light prose-p:leading-relaxed prose-li:text-gray-400">
                
                <h3>1. Introduction</h3>
                <p>
                    GPUcloud xyz ("we," "our," or "us") provides a serverless infrastructure platform for artificial intelligence workloads. 
                    We are committed to protecting the privacy and security of your data. This Privacy Policy outlines how we collect, use, 
                    disclose, and safeguard your information when you visit our website, use our APIs, or interact with our services (collectively, the "Service").
                </p>
                <p>
                    By using the Service, you consent to the data practices described in this policy. If you do not agree with the data practices described in this policy, you should not use the Service.
                </p>

                <h3>2. Information We Collect</h3>
                <p>We collect information to provide better services to all our users. The types of information we collect include:</p>
                
                <h4 className="text-white font-bold text-lg mt-6 mb-2 flex items-center gap-2"><Users size={18} className="text-dats-blue"/> A. Personal Information</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm font-mono">
                    <li><strong>Account Information:</strong> When you register, we collect your name, email address, password hash, and authentication tokens (e.g., GitHub/Google OAuth).</li>
                    <li><strong>Billing Information:</strong> We utilize third-party payment processors (Stripe). We do not store full credit card numbers, but we retain billing addresses and transaction history.</li>
                    <li><strong>Communications:</strong> Records of your interactions with our support team, including emails and chat logs.</li>
                </ul>

                <h4 className="text-white font-bold text-lg mt-6 mb-2 flex items-center gap-2"><Server size={18} className="text-dats-blue"/> B. Technical Usage Data</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm font-mono">
                    <li><strong>Telemetry:</strong> API request metadata such as timestamps, latency, error rates, endpoint usage, and compute duration.</li>
                    <li><strong>Device Data:</strong> Internet Protocol (IP) address, browser type, operating system, and CLI client version.</li>
                    <li><strong>Cookies:</strong> We use cookies to maintain session state and analyze traffic patterns. You can control cookie preferences via your browser settings.</li>
                </ul>

                <div className="bg-dats-blue/10 border-l-4 border-dats-blue p-6 my-8">
                    <h3 className="text-white m-0 mb-2 flex items-center gap-2"><Lock size={20} /> 3. Inference Data & Zero-Retention</h3>
                    <p className="text-white/90 text-sm m-0">
                        We strictly distinguish between "Control Plane" data (account info) and "Data Plane" data (inference payloads).
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-sm text-gray-300">
                        <li>
                            <strong>Ephemeral Processing:</strong> Inputs (prompts, images, audio) sent to our Inference APIs are processed in ephemeral, stateless containers. 
                            <strong>We do not log, store, or train on your inference inputs or outputs</strong> by default.
                        </li>
                        <li>
                            <strong>Memory Hygiene:</strong> Data is held in GPU VRAM only for the duration of the compute task and is immediately overwritten.
                        </li>
                        <li>
                            <strong>Model Weights:</strong> Custom LoRA adapters and model weights uploaded to our object storage are encrypted at rest using AES-256 and are only accessible by your account keys.
                        </li>
                        <li>
                            <strong>Optional Debugging:</strong> Users may explicitly opt-in to "Debug Mode" in the console, which temporarily logs request/response bodies for 24 hours to assist with integration issues.
                        </li>
                    </ul>
                </div>

                <h3>4. How We Use Your Data</h3>
                <p>We use your information for the following legitimate business purposes:</p>
                <ul className="list-disc pl-5">
                    <li><strong>Service Delivery:</strong> To authenticate access, route requests to the nearest GPU cluster, and manage auto-scaling resources.</li>
                    <li><strong>Billing & Metering:</strong> To accurately calculate usage-based fees (per token/second) and prevent fraudulent resource consumption.</li>
                    <li><strong>Security & Compliance:</strong> To detect potential abuse, such as DDoS attacks, cryptomining attempts, or violations of our Acceptable Use Policy.</li>
                    <li><strong>Communication:</strong> To send critical system alerts, API deprecation notices, and billing statements.</li>
                </ul>

                <h3>5. Data Sharing and Disclosure</h3>
                <p>We do not sell your personal data. We disclose data only in the following circumstances:</p>
                <ul className="list-disc pl-5">
                    <li><strong>Service Providers:</strong> We engage trusted third-party vendors (e.g., AWS, GCP, Stripe, Intercom) to perform functions on our behalf. They are contractually obligated to protect your data.</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information if required by law, such as to comply with a subpoena or valid legal process.</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, reorganization, or sale of assets, user data may be transferred as part of the transaction.</li>
                </ul>

                <h3>6. Data Security</h3>
                <p>
                    We employ enterprise-grade security measures to protect your data, including TLS 1.3 encryption for data in transit and AES-256 encryption for data at rest. 
                    Our infrastructure adheres to SOC2 Type II standards. Access to production systems is restricted to authorized engineering personnel via hardware MFA.
                </p>

                <h3>7. International Data Transfers</h3>
                <p>
                    GPUcloud xyz operates a globally distributed network. Your data may be processed on servers located in jurisdictions different from your own. 
                    We utilize Standard Contractual Clauses (SCCs) and Data Processing Agreements (DPAs) to ensure appropriate safeguards for cross-border data transfers in compliance with GDPR.
                </p>

                <h3>8. Your Rights (GDPR & CCPA)</h3>
                <p>
                    Depending on your location, you may have rights regarding your personal data, including:
                </p>
                <ul className="list-disc pl-5 text-sm font-mono">
                    <li><strong>Right to Access:</strong> Request a copy of the data we hold about you.</li>
                    <li><strong>Right to Deletion:</strong> Request the deletion of your account and associated data ("Right to be Forgotten").</li>
                    <li><strong>Right to Correction:</strong> Update inaccurate information via your dashboard settings.</li>
                    <li><strong>Right to Opt-Out:</strong> Unsubscribe from marketing communications.</li>
                </ul>
                <p>
                    To exercise these rights, please contact our Data Protection Officer at <span className="text-dats-blue">privacy@gpucloud.xyz</span>. We will respond within the statutory timeframes (usually 30 days).
                </p>

                <h3>9. Children's Privacy</h3>
                <p>
                    The Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information.
                </p>

                <h3>10. Changes to This Policy</h3>
                <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Continued use of the Service after such changes constitutes acceptance of the new Privacy Policy.
                </p>

            </div>
        </div>
       </div>
    </div>
  );
};

export default Privacy;