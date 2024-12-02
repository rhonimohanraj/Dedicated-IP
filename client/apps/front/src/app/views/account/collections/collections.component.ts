import { Component } from '@angular/core'
import { collectionData } from './data'

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [],
  templateUrl: './collections.component.html',
  styles: ``,
})
export class CollectionsComponent {
  collectionData = collectionData
}
