    <?php


        $user = 'root';
        $password = 'root';
        $db = 'test';
        $host = 'localhost';
        $port = 3306;

        $con = mysqli_connect(
           $host,
           $user,
           $password,
           $db,
           $port
        );

        if (!$con) {
          echo "Error: " . mysqli_connect_error();
        	exit();
        }
        echo 'Connected to MySQL';
        //
        // $con = myslqi_connect("sdb6.hi.local", "MJP49-exg-u-195479", "E557648e", "MJP49-exg-u-195479");
        //
        // if (!$con) {
        //   echo "not connected to server";
        //   exit();
        // }
        // echo "yee boi";
        //

        $one = $_POST['qu1'];
        $two = $_POST['qu2'];
        $three = $_POST['qu3'];
        $four = $_POST['qu4'];
        $five = $_POST['qu5'];
        $six = $_POST['qu6'];
        $seven = $_POST['qu7'];
        $eight = $_POST['qu8'];
        $nine = $_POST['qu9'];
        $ten = $_POST['qu10'];
        $eleven = $_POST['qu11'];
        $twelve = $_POST['qu12'];
        $thirteen = $_POST['qu13'];
        $forteen = $_POST['qu14'];
        $extId = $_POST['extensionId'];


        $sql = "INSERT INTO Test (`Question1`, `Question2`, `Question3`, `Question4`,
          `Question5`, `Question6`, `Question7`, `Question8`, `Question9`, `Question10`,
          `Question11`, `Question12`, `Question13`, `Question14`, `ExtNumber`) VALUES ('$one','$two',
          '$three','$four','$five','$six','$seven','$eight','$nine','$ten','$eleven',
          '$twelve','$thirteen','$forteen', '$extId')";

        if (!mysqli_query($con, $sql)) {
          echo "Not Insterted";
        } else {
          echo "Inserted";
        }

        header('Location: questionairePage.html');

     ?>
