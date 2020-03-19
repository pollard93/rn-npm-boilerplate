import React from 'react';
import { Text } from 'react-native';

export interface HelloProps { compiler: string; }

export const Hello = (props: HelloProps) => <Text>Hello</Text>;
