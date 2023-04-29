import React from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

const Tabli = () => {
return (
	<DataTable style={styles.container}>
	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title>Subject</DataTable.Title>
		<DataTable.Title>Attendance</DataTable.Title>
	</DataTable.Header>
	<DataTable.Row>
		<DataTable.Cell>VLSI</DataTable.Cell>
		<DataTable.Cell>80</DataTable.Cell>
	</DataTable.Row>

	<DataTable.Row>
		<DataTable.Cell>TeleCommunication</DataTable.Cell>
		<DataTable.Cell>75</DataTable.Cell>
	</DataTable.Row>
	<DataTable.Row>
		<DataTable.Cell>Python</DataTable.Cell>
		<DataTable.Cell>100</DataTable.Cell>
	</DataTable.Row>
	<DataTable.Row>
		<DataTable.Cell>DSP</DataTable.Cell>
		<DataTable.Cell>89</DataTable.Cell>
	</DataTable.Row>
    <DataTable.Row>
		<DataTable.Cell>ADC</DataTable.Cell>
		<DataTable.Cell>77</DataTable.Cell>
	</DataTable.Row>
    <DataTable.Row>
		<DataTable.Cell>AE</DataTable.Cell>
		<DataTable.Cell>100</DataTable.Cell>
	</DataTable.Row>
    <DataTable.Row>
		<DataTable.Cell>DSA</DataTable.Cell>
		<DataTable.Cell>69</DataTable.Cell>
	</DataTable.Row>
	</DataTable>
);
};

export default Tabli;

const styles = StyleSheet.create({
container: {
	padding: 15,
},
tableHeader: {
	backgroundColor: '#DCDCDC',
},
});
