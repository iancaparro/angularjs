<?php
require_once '../includes/db.php';

	$errors = array();
	$data = array();

	if (empty($_POST['name']))
		$errors['name'] = 'Name is required.';
	if (empty($_POST['abbreviation']))
		$errors['abbreviation'] = 'Abbreviation is required.';
	if (empty($_POST['status']))
		$errors['status'] = 'Status is required.';

	if (!empty($errors)) {
		$data['success'] = false;
		$data['errors']  = $errors;
	} else {
		// save to database
		$data['success'] = true;
		$data['message'] = 'Success';
	}

	echo json_encode($data);
	