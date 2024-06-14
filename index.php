<?php
// Database connection settings
$host = 'your_public_ip';  // Replace with your public IP or domain name
$db = 'LIGUE1';
$user = 'leottawa';
$pass = 'Noukette001!';
$charset = 'utf8mb4';

// Data Source Name
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

// PDO options
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    // Create a new PDO instance
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    // Handle any connection errors
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

// SQL query to fetch the last 5 rows
$sql = "SELECT * FROM fixtures ORDER BY `Fixture ID` DESC LIMIT 5";
$stmt = $pdo->query($sql);

// Print the fetched rows in an HTML table
echo "<table border='1'>";
echo "<tr>";
// Fetch and print table headers
$firstRow = $stmt->fetch(PDO::FETCH_ASSOC);
foreach ($firstRow as $key => $value) {
    echo "<th>$key</th>";
}
echo "</tr>";
// Print the first row
echo "<tr>";
foreach ($firstRow as $value) {
    echo "<td>$value</td>";
}
echo "</tr>";
// Print the remaining rows
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo "<tr>";
    foreach ($row as $value) {
        echo "<td>$value</td>";
    }
    echo "</tr>";
}
echo "</table>";
?>