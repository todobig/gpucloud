import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6">
      <div className="max-w-[800px] mx-auto prose prose-invert prose-headings:font-display prose-p:font-mono prose-p:text-sm">
        <h1 className="font-display font-black text-5xl mb-8">TERMS OF SERVICE</h1>
        <p className="text-gray-400 mb-8 border-b border-gray-800 pb-8">Last Updated: October 15, 2026</p>
        
        <h3>1. Acceptance of Terms</h3>
        <p>By accessing and using the GPUcloud services ("Service"), you ("User") agree to be bound by these Terms of Service. These Terms constitute a binding legal agreement between you and GPUcloud Inc. If you do not agree to these terms, you must immediately discontinue use of our services.</p>
        <p className="uppercase text-xs font-bold border border-gray-700 p-2 text-center text-dats-blue">
            NOTICE: These terms contain a binding arbitration provision and class action waiver that affect your rights.
        </p>

        <h3>2. Description of Service</h3>
        <p>GPUcloud provides serverless GPU inference APIs. We reserve the absolute right to modify, suspend, or discontinue any part of the service at any time without prior notice or liability. We do not guarantee the availability of any specific model, GPU type, or region.</p>

        <h3>3. Acceptable Use Policy</h3>
        <p>You agree to use the Service solely for lawful purposes. You shall not:</p>
        <ul className="list-disc pl-5 text-gray-400">
            <li>Use the Service for mining cryptocurrency or unrelated background compute tasks.</li>
            <li>Attempt to reverse engineer, decompile, or gain unauthorized access to our infrastructure.</li>
            <li>Transmit any content that is illegal, harmful, threatening, or infringes on intellectual property rights.</li>
            <li>Exceed the rate limits or quotas assigned to your account without authorization.</li>
        </ul>
        <p>Violation of this policy may result in immediate account termination without refund.</p>

        <h3>4. Billing, Payments, and Refunds</h3>
        <p>Usage is billed in millisecond increments based on the duration of GPU occupancy. You authorize us to charge your payment method for all usage fees.</p>
        <p><strong>ALL PAYMENTS ARE FINAL AND NON-REFUNDABLE.</strong> We do not offer refunds for partial use, unused credits, or service interruptions unless explicitly required by law.</p>
        
        <h3>5. Intellectual Property Rights</h3>
        <p>You retain all rights to the inputs you send to the API and the outputs generated ("User Content"). You grant GPUcloud a limited, non-exclusive license to process User Content solely for the purpose of providing the Service.</p>
        <p>GPUcloud retains all rights, title, and interest in the platform, API, documentation, and underlying technology.</p>

        <h3>6. DISCLAIMER OF WARRANTIES</h3>
        <p className="uppercase text-gray-300">
            THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
        </p>

        <h3>7. LIMITATION OF LIABILITY</h3>
        <p className="uppercase text-gray-300">
            IN NO EVENT SHALL GPUCLOUD INC., ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, USE, OR GOODWILL. IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE GREATER OF ONE HUNDRED DOLLARS ($100) OR THE AMOUNT YOU PAID US IN THE PAST SIX MONTHS.
        </p>

        <h3>8. Indemnification</h3>
        <p>You agree to indemnify and hold harmless GPUcloud Inc. from any claims, damages, liabilities, costs, and expenses (including legal fees) arising from your use of the Service, your violation of these Terms, or your violation of any third-party rights.</p>

        <h3>9. Governing Law and Arbitration</h3>
        <p>These Terms shall be governed by the laws of the State of Delaware, without regard to its conflict of law provisions. Any dispute arising under these Terms shall be resolved exclusively through binding arbitration in San Francisco, California.</p>

      </div>
    </div>
  );
};

export default Legal;