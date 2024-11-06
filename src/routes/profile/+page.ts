	import { DateTime } from 'luxon';

	let profileData = [{
		"name": "John Carl Petrie",
		"otherNames": "Snuck;JP",
		"dob": "1956-04-08",
		"email": "john.petrie@proton.me",
		"mobile": "+61409185611",
		"street": "3 Farnham Street",
		"city": "Fig Tree Pocket",
		"state": "Queensland",
		"postcode": "4069",
  	"otherAddresses": "30 Hawthorn Avenue, Ashgrove Qld 4060;15 Broadland Street, The Gap Qld 4061",
		"otherInfo": {
			"parent": "Nola Nelson Petrie; John Keith Petrie",
			"bornIn": "Brisbane",
			"spousePartner": "Jennifer Gail Petrie",
			"ethnicity": "Scottish"
  	},
		"typename": "MEMBER",
		"pk": "MEMBER#fbc6ad06-788f-46ab-b7bf-5aa3cc637014",
		"sk": "John Carl Petrie",
		"id": "fbc6ad06-788f-46ab-b7bf-5aa3cc637014",
		"gsi1pk": "+61409185611",
		"gsi1sk": "john.petrie@proton.me",
}]

	delete profileData[0].typename;
	delete profileData[0].pk;
	delete profileData[0].sk;
	delete profileData[0].id;
	delete profileData[0].gsi1pk;
	delete profileData[0].gsi1sk;

	let dt = DateTime.fromISO(profileData[0].dob)
	dt.setLocale('au')
	let dob = dt.toLocaleString()

	profileData[0].dob = dob
	console.log(profileData)
	const otherTableData = [profileData[0].otherInfo]
	console.log('otherTableData: {otherTableData}')
	const personalTableData = profileData[0]
	delete personalTableData.otherInfo
	console.log('personalTableData: {personalTableData}')
	const otherPersonalData = {otherNames: personalTableData.otherNames, otherAddresses: personalTableData.otherAddresses}
	delete personalTableData.otherNames
	delete personalTableData.otherAddresses
	console.log('otherPersonalData: {otherPersonalData}')


