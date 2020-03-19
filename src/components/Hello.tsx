import React from 'react';
import './Hello.css';

export interface HelloProps { compiler: string; }

export const Hello = (props: HelloProps) => <h1 className="hello__wrap">Hello</h1>;
