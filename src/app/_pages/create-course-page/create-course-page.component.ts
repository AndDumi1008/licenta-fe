import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CourseService} from "../../_services/course.service";
import {AngularFireStorage} from '@angular/fire/compat/storage';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-create-course-page',
  templateUrl: './create-course-page.component.html',
  styleUrls: ['./create-course-page.component.css']
})
export class CreateCoursePageComponent implements OnInit {
  selectedImage: string = '';
  description: string = '';

  public courseForm = new FormGroup({
    title: new FormControl<string>(''),
    img: new FormControl<string>(''),
    author: new FormControl<string>(''),
    description: new FormControl<string>(''),
  })

  constructor(private courseService: CourseService, private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
  }

  add() {
    const course = {
      ...this.courseForm.value,
      id: null
    }
    this.courseService.addCourse(course);
  }

  uploadImage(file: File) {
    const fileName = `course/${new Date().getTime()}_${file.name}`;

    const storageRef = this.storage.ref(fileName);

    const uploadTask = this.storage.upload(fileName, file);
    uploadTask.percentageChanges().subscribe(progress => {
      console.log(`Upload progress: ${progress}%`);
    });

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          // console.log('File available at: ', downloadURL);
          this.courseForm.patchValue({
            img: downloadURL
          })
        });
      })
    ).subscribe();
  }

  onFileSelected(event: any) {
    const file = event.target.files.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.selectedImage = event.target.result;
    };
    reader.readAsDataURL(file);
    this.uploadImage(file!);
  }

  onDescriptionChange(){
  }
}
