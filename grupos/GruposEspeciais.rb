texto = 'supermercado superação hiperMERCADO Mercado'

puts texto.scan(/(?:super)[\wÀ-ú]+/i).join(' ')

# Positive lookahead
puts texto.scan(/(?<=super)[\wÀ-ú]+/i).join(' ')

# Negative lookahead
puts texto.scan(/(?<!super)mercado/i).join(' ')