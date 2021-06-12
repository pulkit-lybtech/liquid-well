import { CButton, CDataTable } from '@coreui/react'
import React from 'react'

export default function Notification() {
	const notifications = [
		{
			notification_id: 1,
			notification_name: "Test Notif",
			date_created: "22-12-19",
			used: 2,
			purpose: "Notify Users",
			type: "Plan A"
		},
		{
			notification_id: 1,
			notification_name: "Test Notif",
			date_created: "22-12-19",
			used: 2,
			purpose: "Notify Users",
			type: "Plan A"
		},
		{
			notification_id: 1,
			notification_name: "Test Notif",
			date_created: "22-12-19",
			used: 2,
			purpose: "Notify Users",
			type: "Plan A"
		},
		{
			notification_id: 1,
			notification_name: "Test Notif",
			date_created: "22-12-19",
			used: 2,
			purpose: "Notify Users",
			type: "Plan A"
		},
		{
			notification_id: 1,
			notification_name: "Test Notif",
			date_created: "22-12-19",
			used: 2,
			purpose: "Notify Users",
			type: "Plan A"
		},
		{
			notification_id: 1,
			notification_name: "Test Notif",
			date_created: "22-12-19",
			used: 2,
			purpose: "Notify Users",
			type: "Plan A"
		},
		{
			notification_id: 1,
			notification_name: "Test Notif",
			date_created: "22-12-19",
			used: 2,
			purpose: "Notify Users",
			type: "Plan A"
		},
		{
			notification_id: 1,
			notification_name: "Test Notif",
			date_created: "22-12-19",
			used: 2,
			purpose: "Notify Users",
			type: "Plan A"
		},
		{
			notification_id: 1,
			notification_name: "Test Notif",
			date_created: "22-12-19",
			used: 2,
			purpose: "Notify Users",
			type: "Plan A"
		},
		{
			notification_id: 1,
			notification_name: "Test Notif",
			date_created: "22-12-19",
			used: 2,
			purpose: "Notify Users",
			type: "Plan A"
		},
		{
			notification_id: 1,
			notification_name: "Test Notif",
			date_created: "22-12-19",
			used: 2,
			purpose: "Notify Users",
			type: "Plan A"
		},
		{
			notification_id: 1,
			notification_name: "Test Notif",
			date_created: "22-12-19",
			used: 2,
			purpose: "Notify Users",
			type: "Plan A"
		},
	]

	const fields = [
		{ key: 'notification_id', label:"id" },
		{ key: 'notification_name',label: "Name" },
		{ key: 'date_created' , label: 'Created on'},
		{ key: 'used',label: "Times Used" },
		{ key: 'purpose',  sorter: false,},
		{ key: 'type',},
		{
			key: 'show_details',
			label: '',
			_style: { width: '1%' },
			sorter: false,
			filter: false
		  }
	]
	return (
		<div>
			<div className="card">
				<div className="card-header">
					<div className="d-flex justify-content-between align-items-center">
						<h4 className="card-title mb-0 ">Notifications </h4>
						<CButton to="/add-notif" className="btn btn-primary ">
							Add New 
						</CButton>
					</div>
				</div>
				<div className="card-body   ">
					<CDataTable 
					fields={fields}
					items={notifications} 
					pagination
					itemsPerPage="10"
					sorter
					tableFilter
					/>
				</div>
			</div>

		</div>
	)
}
