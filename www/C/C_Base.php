<?php
/**
*Базовый контроллер сайта
*/
class C_Base extends C_Controller
{
	public function __construct()
	{
	}
	/**
	*Виртуальный обработчик запроса
	*/	
	protected function OnInput()
	{
		if(isset($_POST['consulting'])) { 	
			 $name=$_POST['Name'];
			 $phone=$_POST['Phone'];
			 $email=$_POST['Email'];
			 $message=$_POST['Your message'];
			 $headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
			 $headers .= "From: #.ru <noreply@#.ru>\r\n"; 
			 $msg="Имя: $name<br />
					Телефон: $phone<br />
					E-mail: $email<br />
					Сообщение: $message<br />";
			$mail_to="info@advocat-mka.ru"; 
			if(mail($mail_to, $msg, $headers))
			header('Location:index.php');
			exit();
		}
		if(isset($_POST['userForm']))
		{
			$name=$_POST['Name'];
			$phone=$_POST['Phone'];
			$email=$_POST['Email'];
			$theme=$_POST['Theme'];
			$period=$_POST['Period'];
			$adress=$_POST['Adress'];
			
			$f = fopen('messages.txt', 'a+') or die ('не удалось создать документ');
			fwrite($f, date('Y-m-d H:i:s') . "___");
			foreach($obj as $value)
			{
				fwrite($f, $value. "\n");
			};
			fclose($f);
		}
	}
	/**
	*Виртуальный генератор HTML
	*/
	protected function OnOutput()
	{
		$page = $this->Template('V/V_Main.php');
		// Вывод HTML
		echo $page;
	}
}
