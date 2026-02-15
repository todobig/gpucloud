import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6">
       <div className="max-w-[800px] mx-auto prose prose-invert prose-headings:font-display prose-p:font-mono prose-p:text-sm">
        <h1 className="font-display font-black text-5xl mb-8">PRIVACY POLICY</h1>
        <p className="text-gray-400 mb-8 border-b border-gray-800 pb-8">Last Updated: October 15, 2026</p>
        
        <h3>1. Information We Collect</h3>
        <p>We collect information to provide and improve our services:</p>
        <ul className="list-disc pl-5 text-gray-400">
            <li><strong>Account Information:</strong> Email address, name, billing details, and API keys.</li>
            <li><strong>Usage Data:</strong> API request metadata, timestamps, compute duration, model selection, and error logs.</li>
            <li><strong>Network Activity:</strong> IP addresses, browser type, and device identifiers for security and rate limiting.</li>
        </ul>

        <h3>2. Zero-Retention Inference Data</h3>
        <p className="border-l-4 border-dats-blue pl-4 text-white font-bold">
            We are a privacy-first infrastructure provider. We do not store, log, or train on your inference data.
        </p>
        <p>The inputs (prompts) you send and the outputs (completions) generated are processed in ephemeral containers and are immediately discarded from memory after the request completes. We do not use your data to train our foundation models or improve our services.</p>

        <h3>3. How We Use Your Information</h3>
        <p>We use your non-inference data solely for:</p>
        <ul className="list-disc pl-5 text-gray-400">
            <li>Providing and maintaining the Service.</li>
            <li>Billing and account management.</li>
            <li>Detecting and preventing fraud, abuse, and security incidents.</li>
            <li>Complying with legal obligations.</li>
        </ul>

        <h3>4. Data Sharing and Third Parties</h3>
        <p>We do not sell your personal data. We only share data with trusted third-party service providers necessary to operate our business, such as:</p>
        <ul className="list-disc pl-5 text-gray-400">
            <li><strong>Payment Processors:</strong> Stripe (for billing).</li>
            <li><strong>Cloud Infrastructure:</strong> AWS/GCP (for encrypted backups of account metadata).</li>
            <li><strong>Analytics:</strong> Aggregated, anonymized traffic analysis.</li>
        </ul>
        
        <h3>5. Security Measures</h3>
        <p>We implement enterprise-grade security measures, including:</p>
        <ul className="list-disc pl-5 text-gray-400">
            <li>SOC2 Type II compliant data centers.</li>
            <li>AES-256 encryption for all data at rest.</li>
            <li>TLS 1.3 encryption for all data in transit.</li>
            <li>Strict access controls and audit logging for internal employees.</li>
        </ul>

        <h3>6. Your Rights (GDPR & CCPA)</h3>
        <p>Depending on your location, you may have the right to access, correct, delete, or export your personal data. To exercise these rights, please contact our Data Protection Officer at privacy@gpucloud.xyz.</p>

        <h3>7. International Transfers</h3>
        <p>Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ. By using our Service, you consent to such transfer.</p>

      </div>
    </div>
  );
};

export default Privacy;