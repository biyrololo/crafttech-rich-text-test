import React from "react";

export type Tool = 'cursor' | 'shape'

export const isTool = (value: string): value is Tool => {
    return value === 'cursor' || value === 'shape';
};

export interface ControlProps {
    tool: Tool;
    setTool: React.Dispatch<React.SetStateAction<Tool>>;
}