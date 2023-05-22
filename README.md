# CMS-BeMusic

## How to start

**1. Clone From Github**

```bash
git clone https://github.com/kothing/CMS-BeMusic.git
```

**2. Go to that folder**

```bash
cd CMS-BeMusic
```

**3. Required Configuration**
Permission for directories.

1. storage 777
1. bootstrap/cache 777
1. public 777

**4. Install Composer**

```php
composer install
```

**5. Create env file**

```bash
Create a .env file by cloning .env.example file
```

**6. Create a Database named**

```bash
your_database
```

**7. Run Migration & Seed**

```php
php artisan migrate:fresh --seed
```
