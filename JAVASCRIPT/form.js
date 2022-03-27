function test()
		{
			if (document.testform.Name.value=="") 
			{
				alert("Please Enter Name");
				document.testform.Name.focus();
				return false;
			}
			if (document.testform.Email.value=="") 
			{
				alert("Please Enter E-mail address");
				document.testform.Email.focus();
				return false;
			}
			if(document.testform.Contact.value=="")
			{
				alert("Please Enter Contact Number");
				document.testform.Contact.focus();
				return false;
			}
			return(true);
		}