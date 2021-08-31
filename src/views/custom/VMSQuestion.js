import {  CDataTable } from '@coreui/react'
import React from 'react'

export default function VmsQuestion() {
	
	const [details, setDetails] = React.useState([])
	// const [items, setItems] = useState(usersData)
  
	const usersData = [
		{id: 0, name: "Rajj Kumar", question: "Why do you want to go to America?", category: "B1", letters: 45, words: 23, date: "22/21/23", similarity: 56, },
		{id: 0, name: "Rajj Kumar", question: "Why do you want to go to America?", category: "B1", letters: 45, words: 23, date: "22/21/23", similarity: 56, },
		{id: 0, name: "Rajj Kumar", question: "Why do you want to go to America?", category: "B1", letters: 45, words: 23, date: "22/21/23", similarity: 56, },
		{id: 0, name: "Rajj Kumar", question: "Why do you want to go to America?", category: "B1", letters: 45, words: 23, date: "22/21/23", similarity: 56, },
		{id: 0, name: "Rajj Kumar", question: "Why do you want to go to America?", category: "B1", letters: 45, words: 23, date: "22/21/23", similarity: 56, },
		{id: 0, name: "Rajj Kumar", question: "Why do you want to go to America?", category: "B1", letters: 45, words: 23, date: "22/21/23", similarity: 56, },
		{id: 0, name: "Rajj Kumar", question: "Why do you want to go to America?", category: "B1", letters: 45, words: 23, date: "22/21/23", similarity: 56, },
		{id: 0, name: "Rajj Kumar", question: "Why do you want to go to America?", category: "B1", letters: 45, words: 23, date: "22/21/23", similarity: 56, },
		{id: 0, name: "Rajj Kumar", question: "Why do you want to go to America?", category: "B1", letters: 45, words: 23, date: "22/21/23", similarity: 56, },
		{id: 0, name: "Rajj Kumar", question: "Why do you want to go to America?", category: "B1", letters: 45, words: 23, date: "22/21/23", similarity: 56, },
		{id: 0, name: "Rajj Kumar", question: "Why do you want to go to America?", category: "B1", letters: 45, words: 23, date: "22/21/23", similarity: 56, },
		{id: 0, name: "Rajj Kumar", question: "Why do you want to go to America?", category: "B1", letters: 45, words: 23, date: "22/21/23", similarity: 56, },
		{id: 0, name: "Rajj Kumar", question: "Why do you want to go to America?", category: "B1", letters: 45, words: 23, date: "22/21/23", similarity: 56, },
		{id: 0, name: "Rajj Kumar", question: "Why do you want to go to America?", category: "B1", letters: 45, words: 23, date: "22/21/23", similarity: 56, },
		{id: 0, name: "Rajj Kumar", question: "Why do you want to go to America?", category: "B1", letters: 45, words: 23, date: "22/21/23", similarity: 56, },
		{id: 0, name: "Rajj Kumar", question: "Why do you want to go to America?", category: "B1", letters: 45, words: 23, date: "22/21/23", similarity: 56, },
		{id: 0, name: "Rajj Kumar", question: "Why do you want to go to America?", category: "B1", letters: 45, words: 23, date: "22/21/23", similarity: 56, },
		{id: 0, name: "Rajj Kumar", question: "Why do you want to go to America?", category: "B1", letters: 45, words: 23, date: "22/21/23", similarity: 56, },
	]

  
  
	const fields = [
		'id',
	  { key: 'name',label: "Interviewer Name" },
	  "question",
	  "category",
	  "letters",
	  { key: 'letters',label: "No. of Letters" },
	  { key: 'words',label: "No. of words" },

	  "date",
	  'similarity',

	
	]
  
	
  
	return (
	 <div className="card">
		 <div className="card-body">
		 <CDataTable
	  border
		items={usersData}
		fields={fields}
		tableFilter
		itemsPerPageSelect
		itemsPerPage={5}
		hover
		sorter
		pagination
		scopedSlots = {{
		 
				
		}}
	  />
		 </div>
	 </div>
	)
}
