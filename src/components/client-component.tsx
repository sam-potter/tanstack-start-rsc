'use client';

import { useState } from "react";

export function ClientComponent() {
    const [state] = useState(100)
    
    return <p>This is a client component with state: {state}</p>
}