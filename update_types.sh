sed -i 's/link?: string;/link?: string;\n  performance?: {\n    title: string;\n    overall: string;\n    semesters: { name: string; gpa: string }[];\n  };/g' src/types.ts
