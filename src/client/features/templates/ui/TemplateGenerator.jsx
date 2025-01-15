import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../../../../../core/ui/CommonComponents/Card'; // Corrected path
import { generateContent } from '../logic/templateService';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import TemplateList from './TemplateList';

const TemplateGenerator = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [inputFields, setInputFields] = useState({});
    const [generatedContent, setGeneratedContent] = useState('');
    const [previewUrl, setPreviewUrl] = useState(null);

    const templateData = {
        'General Power of Attorney': [
            { label: 'Date', key: 'date' },
            { label: 'Principal Name', key: 'principalName' },
            { label: 'Principal PAN', key: 'principalPan' },
            { label: 'Principal EPIC/Passport/OCI/CIO/PIO No.', key: 'principalEpic' },
            { label: 'Principal Aadhaar No.', key: 'principalAadhar' },
            { label: '', key: 'principalRelation', options: ['son', 'wife', 'daughter'] },
            { label: 'of', key: 'principalParentName' },
            { label: 'Principal Address', key: 'principalAddress' },
            { label: 'Principal Faith', key: 'principalFaith' },
            { label: 'Principal Occupation', key: 'principalOccupation' },
            { label: 'Principal Nationality', key: 'principalNationality' },
            { label: 'Attorney Name', key: 'attorneyName' },
            { label: 'Attorney PAN', key: 'attorneyPan' },
            { label: 'Attorney EPIC/Passport/OCI/CIO/PIO No.', key: 'attorneyEpic' },
            { label: 'Attorney Aadhaar No.', key: 'attorneyAadhar' },
            { label: '', key: 'attorneyRelation', options: ['son', 'wife', 'daughter'] },
            { label: 'of', key: 'attorneyParentName' },
            { label: 'Attorney Address', key: 'attorneyAddress' },
            { label: 'Attorney Faith', key: 'attorneyFaith' },
            { label: 'Attorney Occupation', key: 'attorneyOccupation' },
            { label: 'Attorney Nationality', key: 'attorneyNationality' },
            // ... add other fields for General Power of Attorney
        ],
        'Appointment Letter': [
            { label: 'Date', key: 'date' },
            { label: 'Candidate Name', key: 'candidateName' },
            { label: 'Address Line 1', key: 'addressLine1' },
            { label: 'Address Line 2', key: 'addressLine2' },
            { label: 'City', key: 'city' },
            { label: 'State', key: 'state' },
            { label: 'Pincode', key: 'pincode' },
            { label: 'Designation', key: 'designation' },
            { label: 'Company Name', key: 'companyName' },
            { label: 'Starting Date', key: 'startDate' },
            { label: 'Reporting To Name', key: 'reportingToName' },
            { label: 'Reporting To Designation', key: 'reportingToDesignation' },
            { label: 'Place of Posting', key: 'placeOfPosting' },
            { label: 'Working Days Start', key: 'workingDaysStart' },
            { label: 'Working Days End', key: 'workingDaysEnd' },
            { label: 'Working Hours Start', key: 'workingHoursStart' },
            { label: 'Working Hours End', key: 'workingHoursEnd' },
            { label: 'Number of Hours', key: 'numberOfHours' },
            { label: 'Casual Leave', key: 'casualLeave' },
            { label: 'Sick Leave', key: 'sickLeave' },
            { label: 'Notice Period Company', key: 'noticePeriodCompany' },
            { label: 'Notice Period Employee', key: 'noticePeriodEmployee' },
            { label: 'High Court', key: 'highCourt' },
            { label: 'State', key: 'state' },
        ],
    };

    useEffect(() => {
        if (selectedTemplate) {
            const fields = templateData[selectedTemplate];
            const initialInputFields = {};
            fields.forEach((field) => {
                initialInputFields[field.key] = '';
            });
            setInputFields(initialInputFields);
        }
    }, [selectedTemplate]);

    const handleInputChange = (key, value) => {
        setInputFields({ ...inputFields, [key]: value });
    };

    const handleGenerate = async () => {
        try {
            const content = await generateContent(selectedTemplate, inputFields);
            setGeneratedContent(content);
        } catch (error) {
            console.error('Error generating content:', error);
            // Handle error appropriately, e.g., display an error message to the user
        }
    };

    const handleTemplateSelect = (templateType) => {
        setSelectedTemplate(templateType);
        setGeneratedContent('');
        setPreviewUrl(null);
    };

    const handlePreview = () => {
        const doc = new jsPDF();
        doc.text(generatedContent, 10, 10);
        const url = doc.output('datauristring');
        setPreviewUrl(url);
    };

    const handleDownload = () => {
        const doc = new jsPDF();
        doc.text(generatedContent, 10, 10);
        doc.save(`${selectedTemplate}.pdf`);
    };

    return (
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3">
                <TemplateList onSelect={handleTemplateSelect} />
            </div>
            <div className="col-span-9">
                <Card className="border-0 shadow-md h-full">
                    <CardContent className="p-0 h-full flex flex-col">
                        <div className="border-b p-4 flex items-center justify-between">
                            <div>
                                <h3 className="font-medium text-gray-900">Template Generator</h3>
                                <p className="text-sm text-gray-500">AI-assisted document generation</p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                                    onClick={handlePreview}
                                >
                                    Preview
                                </button>
                                <button
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                    onClick={handleGenerate}
                                >
                                    Generate
                                </button>
                            </div>
                        </div>
                        <div className="p-6 flex-1 overflow-auto">
                            {/* Render form fields based on selected template */}
                            {selectedTemplate && (
                                <div>
                                    {templateData[selectedTemplate].map((field) => (
                                        <div key={field.key} className="mb-4">
                                            <label htmlFor={field.key} className="block text-sm font-medium text-gray-700">
                                                {field.label}
                                            </label>
                                            {field.options ? (
                                                <select
                                                    id={field.key}
                                                    value={inputFields[field.key] || ''}
                                                    onChange={(e) => handleInputChange(field.key, e.target.value)}
                                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                                >
                                                    <option value="">Select</option>
                                                    {field.options.map((option) => (
                                                        <option key={option} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </select>
                                            ) : (
                                                <input
                                                    type="text"
                                                    id={field.key}
                                                    value={inputFields[field.key] || ''}
                                                    onChange={(e) => handleInputChange(field.key, e.target.value)}
                                                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Textarea for generated content */}
                            {generatedContent && (
                                <textarea
                                    className="w-full h-full p-4 font-mono text-sm border rounded-lg focus:ring-1 focus:ring-blue-500"
                                    value={generatedContent}
                                    readOnly
                                />
                            )}
                            {/* Preview and Download buttons */}
                            {previewUrl && (
                                <div className="mt-4">
                                    <iframe src={previewUrl} width="100%" height="500px" title="PDF Preview" />
                                </div>
                            )}
                            {generatedContent && (
                                <div className="mt-4">
                                    <button
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                        onClick={handleDownload}
                                    >
                                        Download PDF
                                    </button>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default TemplateGenerator;