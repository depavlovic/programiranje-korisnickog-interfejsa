import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatInputModule,MatCardModule,MatFormFieldModule,RouterLink,MatButtonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
    public email: string =''
    public name:string=''
    public surname:string=''
    public password:string=''
    public confirmPassword: string = ''
    private userService:UserService = UserService.getInstance()


    constructor(private router:Router,private route:ActivatedRoute){
      this.userService = UserService.getInstance()
    } 


    public updateEmail(e:any){
        this.email = e.target.value
    }

    public updateName(e:any){
      this.name = e.target.value
    }

    public updateSurname(e:any){
      this.surname = e.target.value
    }
    public updatePassword(e:any){
      this.password = e.target.value
    }
    public updateConfirmPassword(e:any){
      this.confirmPassword = e.target.value
    }

    public doSignup(){
        if(this.email == '' && this.name == '' && this.surname == '' && this.password == '' && this.confirmPassword == ''){
          alert('password dont match')
            return
        } 
        
        try{
          this.userService.createUser({
            email: this.email,
            name: this.name,
            surname: this.surname,
            password: this.password
            
          })
        } catch(e){
          alert(e)
          return
        }

        this.router.navigate(['/movie'],{relativeTo: this.route})
    }

    

    
}
