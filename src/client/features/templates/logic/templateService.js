const DEEPSEEK_API_KEY = process.env.REACT_APP_DEEPSEEK_API_KEY; // Use environment variable
const DEEPSEEK_API_ENDPOINT = 'https://api.deepseek.com/v1/chat/completions';

export const generateContent = async (templateType, inputFields) => {
    let prompt = '';

    if (templateType === 'General Power of Attorney') {
        prompt = `Generate a General Power of Attorney document with the following details:

Date of Execution: ${inputFields.date}

Principal:
Name: ${inputFields.principalName}
PAN: ${inputFields.principalPan}
EPIC/Passport/OCI/CIO/PIO No.: ${inputFields.principalEpic}
Aadhaar No.: ${inputFields.principalAadhar}
${inputFields.principalRelation} of: ${inputFields.principalParentName}
Residing at: ${inputFields.principalAddress}
Faith: ${inputFields.principalFaith}
Occupation: ${inputFields.principalOccupation}
Nationality: ${inputFields.principalNationality}

Attorney:
Name: ${inputFields.attorneyName}
PAN: ${inputFields.attorneyPan}
EPIC/Passport/OCI/CIO/PIO No.: ${inputFields.attorneyEpic}
Aadhaar No.: ${inputFields.attorneyAadhar}
${inputFields.attorneyRelation} of: ${inputFields.attorneyParentName}
Residing at: ${inputFields.attorneyAddress}
Faith: ${inputFields.attorneyFaith}
Occupation: ${inputFields.attorneyOccupation}
Nationality: ${inputFields.attorneyNationality}

WHEREAS clauses:
- The Principal is entitled to various properties as described in the Schedule.
- The Principal is ordinarily living at ${inputFields.principalAddress}.
- The Principal is unable to manage their affairs and desires to appoint the Attorney.

Terms and Conditions:
1. To look after and maintain the Said Property on my /our behalf as my /our lawful Attorney.
2. To enter into agreement for sale with the prospective buyer or buyers, mortgage the property to any Financial Institution on my/ our behalf and to receive the earnest money, all part payments and full consideration money from the prospective buyers and deposit to my account.
3. To file and receive back any documents, to deposit money by challan or receipt and to withdraw money from any suit, cases or from any office or offices and to grant proper acknowledgement receipt.
4. To apply to Court and Offices for copies of documents and papers and to withdraw deeds, documents, papers from any Court.
5. To apply for the inspection and/or inspect judicial records and any records of any office or offices either Central or State or Local Govt.
6. To negotiate with any person/Officer or any authority relating to the affairs of the Scheduled property and to take decision thereof.
7. To pay taxes regularly before the concerned authority Authority and rent to the Government on my behalf and to do all necessary act or acts, which may be necessary relating to the Schedule Property.
8. To give consent of mutation of names to the proposed Purchasers and to give consent in any manner, which may be required to the purchasers / transferees on my/ our behalf.
9. To swear any Affidavits, Declarations, Agreement, and Indemnity Bond etc. in respect of my/our Said Property as mentioned herein below, if required, in future on my behalf as my / our lawful Attorney(es) before any Judicial, Executive and Notary Public.
10. To represent me before the concerned Corporation/Municipality, Registrar, Sub-Registrar, Registrar of Assurances or any office, Authority, Court, Tribunal including Land Tribunal in respect of under mentioned property as my/our lawful Attorney(es).
11. To appoint any Advocates, Solicitors, etc. on my behalf and to sign Plaints, Pleadings, Written Statements, Deeds, Drafting etc. as my / our lawful Attorney(es).
12. To apply and obtain electricity, water, sewerage, drainage, telephone, or any other utility/ services, to the concerned Premises and to close down and/or connect or disconnect the same and for those purpose to sign, execute and submit all papers, applications, documents before the concerned authorities and to prove all other acts, deeds and things as may doth fit and proper by the said Attorney(es).
13. To sign and present the any Deeds including Deeds of Sale, Conveyance or Conveyances, Lease, Rent, or any other document or documents for registration and to admit thereof and receipt of consideration on my/our behalf before any Sub-Registrar or District-Registrar or Registrars having authority for and to have the same registered according to law and to do all other acts, deeds and things, which my Attorney shall consider necessary for the transferring and/or conveying the Said Property or portions thereof to the Purchaser or Purchasers or any other person as my/our lawful and effectual Attorney(es) and the consideration thereof shall be remitted to me and this Power will not be used for Development purpose.
14. Be it expressly stated that this Power of Attorney is being granted in favour of the said Attorney(es) without any consideration and no right, title or interest is created in favour of the Attorney on the property, which is the subject matter of this Power of Attorney and that further the said Attorney(es) shall not hereby obtain or have power to make any construction, Development work on the said property.
15. All the receivables will be paid back to the Principal and all the payables will be borne by the Principal.
16. The principal shall have every right to revoke this General Power of Attorney at any point of time.
AND I / We do hereby agree to ratify and confirm whatsoever other acts my/our said Attorney(es) shall lawfully do, execute or perform in connection with the sale of the Said Property by virtue of this Power of Attorney of properties notwithstanding no express power in that is hereunder provided

[Instructions: Use formal legal language. Ensure the document is legally sound and appropriate for the jurisdiction, if provided.]

Schedule of Properties:
{Property 1 Description}
{Property 2 Description}
...
`;
    } else if (templateType === 'Appointment Letter') {
        prompt = `Generate an Appointment Letter with the following details:

Date: ${inputFields.date}

Candidate Information:
Name: ${inputFields.candidateName}
Address:
${inputFields.addressLine1}
${inputFields.addressLine2}
${inputFields.city}, ${inputFields.state} ${inputFields.pincode}

Subject: Appointment for post of ${inputFields.designation}

Dear [Mr./Ms.] ${inputFields.candidateName},

We are pleased to offer you the position of ${inputFields.designation} with ${inputFields.companyName} (the 'Company') on the following terms and conditions:

1. Commencement of employment: Your employment will be effective, as of ${inputFields.startDate}.

2. Job title: Your job title will be ${inputFields.designation}, and you will report to ${inputFields.reportingToName}, ${inputFields.reportingToDesignation}.

3. Salary: Your salary and other benefits will be as set out in Schedule I, hereto.

4. Place of posting: You will be posted at ${inputFields.placeOfPosting}. You may however be required to work at any place of business which the Company has, or may later acquire.

5. Hours of Work: The normal working days are ${inputFields.workingDaysStart} through ${inputFields.workingDaysEnd}. You will be required to work for such hours as necessary for the proper discharge of your duties to the Company. The normal working hours are from ${inputFields.workingHoursStart} to ${inputFields.workingHoursEnd}.

6. Leave/Holidays:
    6.1 You are entitled to casual leave of ${inputFields.casualLeave} days.
    6.2 You are entitled to ${inputFields.sickLeave} working days of paid sick leave.
    6.3 The Company shall notify a list of declared holidays in the beginning of each year.

7. Nature of duties: You will perform to the best of your ability all the duties as are inherent in your post and such additional duties as the company may call upon you to perform, from time to time. Your specific duties are set out in Schedule II hereto.

8. Company property: You will always maintain in good condition Company property, which may be entrusted to you for official use during the course of your employment and shall return all such property to the Company prior to relinquishment of your charge, failing which the cost of the same will be recovered from you by the Company.

9. Borrowing/accepting gifts: You will not borrow or accept any money, gift, reward or compensation for your personal gains from or otherwise place yourself under pecuniary obligation to any person/client with whom you may be having official dealings.

10. Termination:
    10.1 Your appointment can be terminated by the Company, without any reason, by giving you not less than ${inputFields.noticePeriodCompany} months' prior notice in writing or salary in lieu thereof. For the purpose of this clause, salary shall mean basic salary.
    10.2 You may terminate your employment with the Company, without any cause, by giving no less than ${inputFields.noticePeriodEmployee} months' prior notice or salary for unsaved period, left after adjustment of pending leaves, as on date.
    10.3 The Company reserves the right to terminate your employment summarily without any notice period or termination payment, if it has reasonable ground to believe you are guilty of misconduct or negligence, or have committed any fundamental breach of contract or caused any loss to the Company.
    10.4 On the termination of your employment for whatever reason, you will return to the Company all property; documents and paper, both original and copies thereof, including any samples, literature, contracts, records, lists, drawings, blueprints, letters, notes, data and the like; and Confidential Information, in your possession or under your control relating to your employment or to clients' business affairs.

11. Confidential Information:
    11.1 During your employment with the Company you will devote your whole time, attention and skill to the best of your ability for its business. You shall not, directly or indirectly, engage or associate yourself with, be connected with, concerned, employed or engaged in any other business or activities or any other post or work part time or pursue any course of study whatsoever, without the prior permission of the Company.
    11.2 You must always maintain the highest degree of confidentiality and keep as confidential the records, documents and other Confidential Information relating to the business of the Company which may be known to you or confided in you by any means and you will use such records, documents and information only in a duly authorized manner in the interest of the Company. For the purposes of this clause 'Confidential Information' means information about the Company's business and that of its customers which is not available to the general public and which may be learnt by you in the course of your employment. This includes, but is not limited to, information relating to the organization, its customer lists, employment policies, personnel, and information about the Company's products, processes including ideas, concepts, projections, technology, manuals, drawing, designs, specifications, and all papers, resumes, records and other documents containing such Confidential Information.
    11.3 At no time, will you remove any Confidential Information from the office without permission.
    11.4 Your duty to safeguard and not disclose Confidential Information will survive the expiration or termination of this Agreement and/or your employment with the Company.
    11.5 Breach of the conditions of this clause will render you liable to summary dismissal under clause above in addition to any other remedy the Company may have against you in law.

12. Notices: Notices may be given by you to the Company at its registered office address. Notices may be given by the Company to you at the address intimated by you in the official records.

13. Applicability of Company Policy: The Company shall be entitled to make policy declarations from time to time pertaining to matters like leave entitlement, maternity leave, employees' benefits, working hours, transfer policies, etc., and may alter the same from time to time at its sole discretion. All such policy decisions of the Company shall be binding on you and shall override this Agreement to that extent.

14. Governing Law/Jurisdiction: Your employment with the Company is subject to Indian laws. All disputes shall be subject to the jurisdiction of ${inputFields.highCourt} ${inputFields.state} only.

15. Acceptance of our offer: Please confirm your acceptance of this Contract of Employment by signing and returning the duplicate copy.

[Instructions: Use formal and professional language. Ensure the letter is clear, concise, and legally sound.]

Schedule I: Compensation Details (to be provided separately)
Schedule II: Duties and Responsibilities (to be provided separately)
`;
    } else {
        return Promise.reject(new Error('Invalid template type'));
    }

    const requestBody = {
        model: 'deepseek-chat',
        messages: [
            { role: 'system', content: 'You are a helpful assistant that generates legal documents.' },
            { role: 'user', content: prompt }
        ],
        max_tokens: 3000, // Increased max_tokens
        temperature: 0.7, // Adjust as needed
    };

    try {
        const response = await fetch(DEEPSEEK_API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'DeepSeek API request failed');
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('Error generating template:', error);
        throw error;
    }
};