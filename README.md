# mp-ecommerce

Este e-commerce de ejemplo será la base para la integración de MercadoPago con `nodejs`.

## Getting Started

## Test Cards

| Number                          | Security Code | Expiration Date | Flag |
| ----------------------------- | ----------------| ----------------|-------|
|5031 4332 1540 6351           | 123              | 11/25           | Master |
|4235 6477 2802 5682           | 123              | 11/25           | Visa |
|3753 651535 56885             | 1234             | 11/25           | American Express |

# To Do

[ ] Incluir integrator_id
[X] Não permitir cartões visa
[X] Limitar parcelamento só para até 6x
[X] Redirecionar (back_url) ao finalizar a compra com sucesso
[ ] Mostrar payment_method_id, external_refernce e payment_id ou collection_id na página de sucesso
[X] Use init_point instead of sandbox_init_point
[X] Incluir o javascript de segurança em cada um dos arquivos
[X] Incluir a view de onde o javascript de segurança está
[X] Criar um endpoint para receber notificações de WebHook

## Product

| Field                          | Value |
| ----------------------------- | ----------------|
| id                   | 1234                                               |
| name                 | Nome do produto selecionado no carrinho de venda.  |
| description          | Celular de Tienda e-commerce                       |
| picture_url          | Foto do produto selecionado. (url válida)          |
| quantity             | 1                                                  |
| unit_price           | Preço do produto selecionado.                      |
| external_reference   | Deve indicar aqui o seu Email, o mesmo que utilizará para preencher o formulário do exame. (o primeiro).                                          |

## Payer


| Field                          | Value |
| ----------------------------- | ----------------|
| name                        | Lalo                            |
| surname                     | Landa                           |
| email (Test User)           | test_user_92801501@testuser.com |
| (phone) area_code           | 55                              |
| (phone) number              | 985298743                       |
| (address) street_name       | _false_                         |
| (address) street_number     | 123                             |
| (address) zip_code          | 78134-190                       |