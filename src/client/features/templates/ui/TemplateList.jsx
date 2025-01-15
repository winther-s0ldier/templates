import React from 'react';
import { Card, CardContent } from '../../../../../core/ui/CommonComponents/Card'; // Corrected path
import { FileText } from 'lucide-react';

const TemplateList = ({ onSelect }) => {
    const templates = [
        'General Power of Attorney',
        'Appointment Letter'
        // Add other template types here
    ];

    return (
        <Card className="border-0 shadow-md">
            <CardContent className="p-4">
                <h3 className="font-medium text-gray-900 mb-4">Template Type</h3>
                {templates.map((type) => (
                    <div
                        key={type}
                        className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer"
                        onClick={() => onSelect(type)}
                    >
                        <FileText size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-700">{type}</span>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default TemplateList;