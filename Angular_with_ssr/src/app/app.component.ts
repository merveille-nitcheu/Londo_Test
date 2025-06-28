import { Component } from '@angular/core';

// import { BrandService } from './brand.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrandService } from './brand.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {
    'ngSkipHydration': ''
  }
})
export class AppComponent {
 brands: any[] = [
  {
    brand_name: 'Marque A',
    description: 'Description fictive A',
    created_at: new Date().toLocaleString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
  },
  {
    brand_name: 'Marque B',
    description: 'Description fictive B',
    created_at: new Date().toLocaleString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
  }
];

  currentPage = 1;
  itemsPerPage = 10;
  searchQuery = '';

  constructor(private brandService: BrandService) {

  }

  newBrand = {
  brand_name: '',
  description: ''
};

  ngOnInit(): void {
    this.loadBrands();
  }

  loadBrands(): void {
    this.brandService.getAllBrands().subscribe((data) => {
      this.brands = data;
    });
  }

  get paginatedBrands(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredBrands.slice(start, start + this.itemsPerPage);
  }

  get filteredBrands(): any[] {
    return this.brands.filter(brand =>
      brand.brand_name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  changePage(page: number): void {
    this.currentPage = page;
  }

  totalPages(): number {
    return Math.ceil(this.filteredBrands.length / this.itemsPerPage);
  }

  submitBrand(): void {
    console.log('hello')
    const formData = new FormData();
  formData.append('brand_name', this.newBrand.brand_name);
  formData.append('description', this.newBrand.description);
for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
    this.brandService.storeBrand(formData).subscribe(() => {
      this.loadBrands();
      this.newBrand = { brand_name: '', description: '' };
    });
  }

}

