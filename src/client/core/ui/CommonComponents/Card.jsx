import React from 'react';

export const Card = ({ className, children }) => (
    <div className={`border rounded-lg shadow-md ${className}`}>
        {children}
    </div>
);

export const CardContent = ({ className, children }) => (
    <div className={`p-4 ${className}`}>
        {children}
    </div>
);