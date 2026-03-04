import React from 'react';
import { Scale, FileWarning, AlertOctagon, Gavel, CheckCircle, Ban, Globe } from 'lucide-react';

const Legal: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6 font-sans">
      <div className="max-w-[1000px] mx-auto">
        
        <div className="mb-12 border-b border-gray-800 pb-12">
            <div className="flex items-center gap-3 text-dats-blue mb-4">
                <Scale size={24} />
                <span className="font-mono text-sm font-bold uppercase tracking-widest">Legal Document</span>
            </div>
            <h1 className="font-display font-black text-5xl md:text-7xl mb-6">TERMS OF SERVICE</h1>
            <p className="font-mono text-gray-400 text-sm">
                Last Updated: October 24, 2026 <br/>
                Effective Date: January 1, 2026
            </p>
            
            <div className="mt-8 p-4 border border-yellow-600/50 bg-yellow-900/10 flex gap-4 items-start">
                <AlertOctagon className="text-yellow-600 shrink-0 mt-1" />
                <p className="text-sm text-yellow-500/90 leading-relaxed">
                    <strong>IMPORTANT NOTICE:</strong> THESE TERMS CONTAIN A BINDING ARBITRATION PROVISION AND WAIVER OF CLASS ACTION RIGHTS. 
                    PLEASE READ SECTION 13 CAREFULLY.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar / TOC */}
            <div className="lg:col-span-4 hidden lg:block sticky top-24 h-fit">
                <h3 className="font-bold text-white mb-4 uppercase text-sm tracking-widest border-b border-gray-800 pb-2">Sections</h3>
                <ul className="space-y-3 font-mono text-xs text-gray-500">
                    <li className="hover:text-dats-blue cursor-pointer">1. Acceptance</li>
                    <li className="hover:text-dats-blue cursor-pointer">2. Service Description</li>
                    <li className="hover:text-dats-blue cursor-pointer">3. Account Security</li>
                    <li className="hover:text-dats-blue cursor-pointer">4. Acceptable Use (AUP)</li>
                    <li className="hover:text-dats-blue cursor-pointer">5. Fees & Payment</li>
                    <li className="hover:text-dats-blue cursor-pointer">6. Intellectual Property</li>
                    <li className="hover:text-dats-blue cursor-pointer">7. Confidentiality</li>
                    <li className="hover:text-dats-blue cursor-pointer">8. Termination</li>
                    <li className="hover:text-dats-blue cursor-pointer">9. Disclaimers</li>
                    <li className="hover:text-dats-blue cursor-pointer">10. Liability Limitation</li>
                    <li className="hover:text-dats-blue cursor-pointer">11. Indemnification</li>
                    <li className="hover:text-dats-blue cursor-pointer">12. Export Control</li>
                    <li className="hover:text-dats-blue cursor-pointer">13. Dispute Resolution</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-gray-400 prose-p:font-light prose-p:leading-relaxed prose-li:text-gray-400">
                
                <h3>1. Acceptance of Terms</h3>
                <p>
                    These Terms of Service ("Terms") constitute a binding legal agreement between you ("Customer", "User", or "You") and GPUcloud Inc. ("Company", "we", "us"). 
                    By registering for an account, accessing the API, or using our infrastructure services, you accept and agree to be bound by these Terms and our Privacy Policy.
                </p>
                <p>
                    If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity. 
                    If you do not have such authority, or if you do not agree with these Terms, you must not accept these Terms and may not use the Service.
                </p>

                <h3>2. Service Description</h3>
                <p>
                    GPUcloud provides high-performance computing infrastructure for artificial intelligence applications ("Service"). 
                    The Service includes access to GPU compute nodes, inference APIs, model hosting, and related developer tools. 
                    We may update the Service from time to time, including adding or removing features, models, or hardware types.
                </p>

                <h3>3. Account Registration & Security</h3>
                <p>
                    You must provide accurate and complete information when registering. You are responsible for maintaining the confidentiality of your API keys and account credentials. 
                    You agree to notify us immediately of any unauthorized use of your account. You are strictly liable for all activities that occur under your account credentials, 
                    regardless of whether you authorized them.
                </p>

                <h3>4. Acceptable Use Policy (AUP)</h3>
                <p>You agree to use the Service only for lawful purposes. You shall <strong>NOT</strong>:</p>
                <div className="bg-black border border-gray-700 p-6 rounded-lg my-6">
                    <ul className="list-disc pl-5 font-mono text-sm space-y-2 text-gray-300">
                        <li><strong>Cryptomining:</strong> Perform cryptocurrency mining, Proof-of-Work hashing, or other blockchain maintenance tasks. Detection triggers immediate account suspension.</li>
                        <li><strong>Illegal Content:</strong> Generate, store, or distribute Child Sexual Abuse Material (CSAM), non-consensual sexual imagery, or content promoting terrorism or hate speech.</li>
                        <li><strong>Network Abuse:</strong> Conduct DDoS attacks, port scanning, or attempt to bypass authentication or rate limits.</li>
                        <li><strong>Reverse Engineering:</strong> Decompile, disassemble, or reverse engineer any portion of the Service's underlying software or architecture.</li>
                        <li><strong>Safety Interference:</strong> Use the Service for critical systems where failure could lead to death, personal injury, or environmental damage (e.g., autonomous vehicle control, life support).</li>
                    </ul>
                </div>

                <h3>5. Fees and Payment</h3>
                <p>
                    <strong>Billing:</strong> You agree to pay all fees calculated based on your usage (e.g., compute time, tokens) in accordance with our current pricing schedule.
                </p>
                <p>
                    <strong>Payment Method:</strong> You must provide a valid payment method. We reserve the right to suspend access immediately if payment fails.
                </p>
                <p>
                    <strong>Refunds:</strong> All fees are non-refundable unless otherwise required by law.
                </p>
                <p>
                    <strong>Taxes:</strong> You are responsible for all applicable taxes, levies, or duties imposed by taxing authorities.
                </p>

                <h3>6. Intellectual Property Rights</h3>
                <p>
                    <strong>Customer IP:</strong> You retain all ownership rights to: (a) your Input Data; (b) your Custom Models; and (c) the Output generated by the Service.
                </p>
                <p>
                    <strong>Company IP:</strong> GPUcloud retains all rights, title, and interest in and to the Service, including the API, documentation, pre-trained base models provided by us, and underlying infrastructure.
                </p>

                <h3>7. Confidentiality</h3>
                <p>
                    We will treat your data as Confidential Information. We will not disclose your Confidential Information to third parties except as required to provide the Service or as compelled by law. 
                    We implement industry-standard security controls (SOC2) to protect your data.
                </p>

                <h3>8. Termination</h3>
                <p>
                    We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms (specifically the AUP). 
                    Upon termination, your right to use the Service will immediately cease.
                </p>

                <h3>9. Disclaimer of Warranties</h3>
                <div className="p-4 border border-gray-700 bg-black text-gray-400 text-sm font-mono uppercase tracking-wide">
                    THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. GPUCLOUD INC. EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, 
                    WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </div>

                <h3>10. Limitation of Liability</h3>
                <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, GPUCLOUD INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, 
                    OR ANY LOSS OF PROFITS OR DATA. OUR TOTAL AGGREGATE LIABILITY ARISING FROM OR RELATING TO THESE TERMS SHALL NOT EXCEED THE GREATER OF 
                    (A) ONE HUNDRED DOLLARS ($100) OR (B) THE AMOUNT PAID BY YOU TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                </p>

                <h3>11. Indemnification</h3>
                <p>
                    You agree to indemnify, defend, and hold harmless GPUcloud Inc. from and against any claims, liabilities, damages, and expenses 
                    (including legal fees) arising out of your use of the Service, your violation of these Terms, or your violation of any rights of a third party.
                </p>

                <h3>12. Export Control</h3>
                <p>
                    The Service may be subject to U.S. export control laws. You represent that you are not located in a country subject to a U.S. government embargo 
                    and that you are not listed on any U.S. government list of prohibited or restricted parties.
                </p>

                <h3>13. Dispute Resolution & Arbitration</h3>
                <p>
                    <strong>Binding Arbitration:</strong> Any dispute arising from these Terms shall be resolved by binding arbitration conducted by JAMS in accordance with its Comprehensive Arbitration Rules.
                </p>
                <p>
                    <strong>Class Action Waiver:</strong> YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.
                </p>
                <p>
                    <strong>Governing Law:</strong> These Terms shall be governed by the laws of the State of Delaware, without regard to its conflict of law provisions.
                </p>

                <h3>14. Contact</h3>
                <p>
                    For legal notices or questions regarding these Terms, please contact: <br/>
                    <a href="mailto:legal@gpucloud.xyz" className="text-dats-blue hover:underline font-mono">legal@gpucloud.xyz</a>
                </p>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;