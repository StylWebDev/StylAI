import {Component, computed, signal} from '@angular/core';
import {FlexComponent} from "../../display/flex/flex.component";
import {FormsModule} from "@angular/forms";
import {ChatService} from "./chat.service"

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    FlexComponent,
    FormsModule
  ],
  templateUrl: './chat.component.html',
})
export class ChatComponent {
  constructor(private chatService: ChatService) {}

  question = signal<string>('');
  questionTable = signal<string[]>([]);
  answerTable = signal<any[]>([]);
  truthy = signal<boolean>(false);
  disable = signal<boolean>(false)

  getAnswer() {
    this.truthy.set(true);
    this.questionTable().push(this.question());
    this.chatService.getAnswer(this.question())
      .subscribe((data ) => {
        this.answerTable().push(data)
        if (data.hasOwnProperty('code')) {
          this.disable.set(true);
        }
        this.truthy.set(false);
      });
    this.question.set('');
  }
}
