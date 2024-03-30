<?php

/**
 * https://www.php.net/manual/en/curl.examples-basic.php
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// URL of the JSONPlaceholder API endpoint
$url = 'https://jsonplaceholder.typicode.com/comments?postId=3';

// Initialize cURL session
$curl = curl_init();

// Set cURL options
curl_setopt_array($curl, array(
    CURLOPT_URL => $url,
    // CURLOPT_RETURNTRANSFER => true,  // Return the response as a string
    // CURLOPT_HEADER => false,         // Don't include the header in the output
    // CURLOPT_SSL_VERIFYPEER => true,  // Verify the peer's SSL certificate
    // CURLOPT_FOLLOWLOCATION => true,  // Follow any redirects
    // CURLOPT_MAXREDIRS => 5           // Maximum number of redirects to follow
    CURLOPT_SSL_VERIFYPEER, false
));

// Execute the request and fetch the response
$response = curl_exec($curl);

// Check for errors
if(curl_errno($curl)){
    echo 'Curl error: ' . curl_error($curl);
}

// Close cURL session
curl_close($curl);

// Output the response
echo $response;
?>

